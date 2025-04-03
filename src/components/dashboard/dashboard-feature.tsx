/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "4EHEWTnfWt2K75AjBVV7yym42tiDRFEL8emCwjnHeYTYK8rJUp3nM1u1tBhSxXNUNpkz9ynmkRdDQD2oEMotE62k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XicHHuCttmfLBQAhG3dJna9WbkJ6Zbs1UGZNnsJE61p6rVDmFjLWRWcX18MAawRA8rrd963Y3vXJzXX6H1XL6BL",
  "key1": "22zHrAFbAsdUeo7Wqm4xdicG6GCtk5f5qvZmKMZzTCh2SYUntZSwQcLF76LCoeNgSoVY4REUfD3EsNzm1kVuaafX",
  "key2": "3LP9xhXPXR4VoSBzT8vsJJ96BgEoaBKtpdFFqXVSXcihHdHLaNXrRqHNmB6uuk4tQe91eAnbvhwbGrgSGVXE7aKU",
  "key3": "51e1bYTNttF7DV6SqhoD1C3kDzYkMoY4k3CGoxRLxthrDQDURD2sFJg1Qq7Y8CNiPZ9hRWodRS9JAfPU2ygBmTEb",
  "key4": "4g94E3JVdzhCR9ATdV4poJuuuqSxwz9TCNQ28LJawj3YXwQ35LXCxfPWLCKd2tSYAGEcojPgNYS2fcMuJX8bWXzM",
  "key5": "3na9igb4VVLLBbhCx5nJ7LErgSGwpQy6a8QpUZVjPsapS8mscED4abyhxQECt1sPkrGR86GbzyxTPr75L47J6q4H",
  "key6": "2NCCQwLhT7PtxoqFaakQLpfusXvs1pR9iCSZ8vuH4uKM7W7AHpjj7Tkoi5Z1bQhnDMByiVDpPDAMzwwjP5AnisaA",
  "key7": "2mSRu5J88qdg7oqMuNh82235td49eTgLdqeBkQ5ssGxbj1yPyi84tWAX26arok39sbEEGwbScxTKpL73jaiV5RUh",
  "key8": "4oWrGx7kxgafmSiZno9uF3UJ6Tr6srfEt3fwcsL4BUFWpTJecyft5dHsAsvgvgEWTmVSS9mQZ3xGsFPCNr9Squvp",
  "key9": "54PWHYqN6XP96wFg6dCQpj4rzTvsr6PtUbfuwYjL7huzWbPwLcezeVsLTJsxdgE51mR4wBjcuxLrikHTBE6ThR5p",
  "key10": "4cju6seaDeAz77WPTMJTJ8BRQA31AEwEY3jEH6ZmQ6cPppiy21zTp4phw9j6Drpz9aLNLBoWXxfy2FaXW8Hin5mu",
  "key11": "5sSDZxUTw7shwmCyk4Ei1qcR3DxCKbEBGruqT8v8DWhcBdvq4YHy6FtWyuK9LbyuGqXXgXJmcduZQsJJctb8y59w",
  "key12": "4BqHfjKEDfgtPZ81ijpkga3sUzNYKUd4ce5zTEUeBPsLbgSb7tr3wWsnFuERNohaEjKRwut9QtcrHbFYb8nurnjP",
  "key13": "4AnJ62c2BfBSarXiFrk9qMANQ423HsZJA8gpShzVFgpq9Wrh4CX48r73MYmJcrdxfcX31nYHvadfBbGuEtpUXNis",
  "key14": "21FYj5wUA29X8j3CbodkaL3V1Eigr6H2uiRxnQ9LLwFvPiLRmf3wwwD6up4i2EN7qCDhqz4fkYaiqDTKLEitMAEi",
  "key15": "5eXyWBKPmBasonhBjQTL2eqqsjAjaiwhvCvtY5VHXjYdpBkAQNMFRg2F1cA8vJoVsjdsR6eAQJj5UaByerTgaku5",
  "key16": "fcobnQCJEQqQA2uZw47x8nhj46wjXnJcNRmqinp5NPZzJ44UeENpreJEUB7M8MAv1SnU8CutSkRHYnjiUnvrDde",
  "key17": "A4RxLqXsRr9XxbG3MUWbeU8EVFWk9DoL21MB89e1CQaV4Kr2D8i2URoGVVcXD873RbmxccP1dKs42SseMEn8MUo",
  "key18": "2VgkY9MgP1z92VuNDtdexJ4dPztLWkXFSQ5kdq7G4QBJSU2jfgZmHguSzZhN8Et6qkN7taFn2xYTgTF7bqYPFbnz",
  "key19": "674k3S8nsohvv1ws7ZqYTPQXsPM2eU86a86k2QZnrw6TTbwWxiP3LK3BaJ7eJC1A2336faeN4V66BhkvWJLYuovZ",
  "key20": "5vDhcHqaiVsKGK84jhMoHbS3ZA4iMPVJ4t7JUukNcJ9gefdz6GRwutA9RveY9bd26auNjxAsXS52fRjg3f9hubtd",
  "key21": "gCKiUazqXTWBVqTwURDT61Ho5MHmCxCLzMEny1e9PhKXMoTqKsrkrTdJxJuYihrQxZ3uSkvsuZQbffKFnxW5z2D",
  "key22": "4MgXJzxbDFn6qhCwSPfMpvQSGNshdfNQns5X8LGGbGnB5wne8XPsUt8GWn9g5hGh5vdKzR5Fd7vxKGVnrFGF4Yza",
  "key23": "37SywuSWoabd7Zodf8jBmBQ9Y8t4VQjpvjidYtcjw3vW1vp4maTxVdjTLXQrjh6eEzuihkhoM8BruMooeSCmKxa5",
  "key24": "2U6KYuBWaQGAHsS4LXN3NvXn33zZubZ4pxyBdpX3yJGQmYakao5CA1CKSYTnr4NwPqhAaiFpuebUE5kg9wZtXsav",
  "key25": "5x95WfBVJgDkHmmPpZNgngWxXrizWS1mbyGwqeETMQFWihGT2mDqk3jxsrdKmtxjYammhi8WFb4r4wd1QyxcWFdg",
  "key26": "2HDTSHA1bVzSdUg8GuWezWZD3D3WzfgDt4a5taEerHfsicPegEpbpyuMimNrYqufzmmPjYxjSh94n4GeeS4NdVNo",
  "key27": "dPmerBHMvAvuFpssr85FPNuQ3WiUvnXYKhFU3uuv9bEfkbHHzNgcodFxnezfmXnj5nEXgyvEn4jCF2VKWwmRbtL",
  "key28": "2e6mXQo2WA9w6pcNGqvKs8Cxnu1f736SPtKDbFQxqPzWpkFFpZ5HMRxGwdpqC69AMkkRzmuJSrVG9wqMu9EFw5Q5",
  "key29": "5wUQSEbhctiNmNRqqZTSRcS93WQXNwCZqYnnjPyP8C91Yddq7i7zEDchXcwxBAHLMXWjJxS87PywsxZCoCraUV8m",
  "key30": "2oszGkZVKyeVfH4q4JJJ5Fq7iHGMDxKT175X8PFperFCUDkCuYYHK4WfqWbwtjRrAxQiNbtaNjp4672uMZo43TGa",
  "key31": "3U9H4pcsdZBQneJGr1HV4yV74zXALCNo7TJX9jgd5inKKVUFThzRXm4tSqoaVr2mHfaVhAeUGo5DAHbAZicbgXst",
  "key32": "3x4v5Cc8Tsuxp7nMmJ54gBgMWX8p7nNnJFHwXqrWcEFxD8DbQqQYfGZz9Q7jwmPmLrFEtruCMYCx2NtBtxSBhAYu",
  "key33": "3Tuqcf3G9euCQaQ441KTpsV2shhyRD7ZzMNBGoFD58XyVnYh8Y6Juu1QWSQdiAe1fWawYzeHciW6LgtU1hpAgAPK",
  "key34": "5QBDwvFN2EUory2CtVg5JXjfccc8MeHUScEoZW7uSEq2xicyrFQWQJ2dehwo6WA4gRjpjYboyRWHm342wQdQKyDa",
  "key35": "oVADJqKHbpeXmwyvcD6LE4RUAw7tqzVGsw2nZEJ5hgpfHGzpgQdf5rys6sRJLH8JQyvgzP4BsJh8EU7ERPR2JVi",
  "key36": "58qBpmqQREFLUdFbvEAPnaZguUAamDVH9NMurs5XGXbCcn74tG361AXVwgNLU4y9SvB3TNK9UqpP5E6ve214J7Mr",
  "key37": "4JdfKk7zao1YkeSwXmxBHvpzPzHnj1aP6ehAY9PfvjWnqeQ8sTF2StfMerVgV2CQzBDieDhUnWTc3sUvNdopZMe6",
  "key38": "5wq3qkrBEtXGcKoR3N8UmypSPPYaA86HVs8ZVFDK9iKjtMDN1rAK4Q3Bi1PL8ifUrpejzVRJ42ESYhZnkQiopMwG",
  "key39": "31yFYcNp775Z7vzPfcUB8EmJ8r9hQkS8Fhi81MaqZLhhmkHjzAXdYjPoLdnMbcSSqaHQnjL5qqkAy3LoDQN29gRs",
  "key40": "3AgZ4jveqL3oj6BTkUoSZ4gMU27Lep9ehSGccXQaEsyBDmSodKGPSCiKh3LDaTK3VGLec2Nz3t3wX8aV6nCYJJtg",
  "key41": "4S7YjoopK3169gMnLfPKcQQeDrcDYCU2c7CoFERREMXcwAyfoz8BMFNGGrnxRcoynBhGF5TQNMqd3yF95p81syeK",
  "key42": "qZ1SE5VbzEGveqiyecEncmZtQNHVhbY1LR4i4fxmG7RJL1VoGPZrdn49Xi8GM5AxQzXcNwwjpvLEK6TCA6pgoE5",
  "key43": "5murbooWNTCApthtby8FW2NWSDx6YqvWutVNfuxSpix2dj5XZ2RBDuk7pgZ4aA8c6xERtBRS1Ta3vysuV36nBfpL",
  "key44": "3r8A1TyJhaXSX3mCWrAypKpd9V4vvrEeDxf5rcKhbc94SPKhHaeUFHgWa2h1N5sANmcg32qUSiUT1i4pCJ89vkGd"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
