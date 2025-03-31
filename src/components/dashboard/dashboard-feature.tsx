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
    "5ovt84DMCyngpaKmc6JzC8ktBt1SuQrrorUcHwPvNbhaEzatZBjicA3HnCmyP7V48HBJTivqYBRtffpYFQogzuSH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YacGY8pCAbE7xrsGWqdfSYxRKuTFekdJ9jtmUKeZ3rZFWWzJQ1qBTJ6uVnyTBm7FfEq963W4uifWL4zsfgcv8sG",
  "key1": "heXghGFnLbWKCP2WKgVMxeRrFeKoyZ6mMWFrkCNwqABqysaapVU4nwSWgqngrh4jjZkzeiBUGVWeGBepuv7Jr2q",
  "key2": "Wmrw7MdfTdfU9Wqffea7nSzxqWyb9omjcwyhB3iAUXZTJUs7nuwiAY1aiYZ9nfb57Ejpe4gR1SUnSBnXVh98mzj",
  "key3": "2GmPnV63vL5fBuHcbYpuGnKrNVswCHC2KFoaJeJNXoCGdZ3DZLiYAZ5LhjXEyf4m3MCkhSZyvmFyqAZawNRkEZuV",
  "key4": "4bcn3erzqsdM35gNZvja2EXzp9UeDoqh1KeRY5tCNecC4W7S1S57p77KiAzRmwckL3atRRLhfdxWaqEgt1VUt6Jt",
  "key5": "3jtxT2zWiB9BV3TijGkVnL1jVBkYS29rk65kehR19hAwisahqZeuAtjKPS6EBH4oeCKURS6c73MMJFQbWXYD4Zw9",
  "key6": "2dmtGPkVRLxnyqVhiRQxfmL4A2bvC9uq4qmoHJxqZb8KNSP91VmPDHc9YJ2dyX7715v7tjSZhJnXw2dako8gLfGY",
  "key7": "2AzEfQjN3fh86VMd74suUgggj2dFzX4VMLMNVPiRKh8MA3g6fsAfg1W4V76RiUYTouvyudJGidjMvekvSD2BM5em",
  "key8": "ywfnPUwZYArU7y6v1HKfEsJna1ha5MYzVsUu1jr1FfvBv8ZbkqEkcLV476M5yB9v9T8TedufkrTxfSWgn4vGJeb",
  "key9": "dzbeqdjwL8ECYD7yX64zV1HR7fEQ6GRpGAZqwqvDkSVEv8dztjQRpkvv8yfhq4LFUrouaqyNgJYrEcRhvkqChYD",
  "key10": "5xbaLvsr5baVpsJM6uQ6bN9vPvGgnuQwaVZvpcPveefLgoib87J1dPhg87aqvZWzVjHpmkW7vCBnCt3bD3kBoNPJ",
  "key11": "4QrFV8P5rqCZBgwqrdtJZPL1sBfvoF9sXbXaRbUm7ZjUBiSPLGyAUwFpRAY7dF5tdJsq44aWoCWyeMoMkVZFXNWJ",
  "key12": "5vmC8kg7yoiygC2ZqbixThXaUpLkpbeo7Y2cAWE2PUM4TEBz4EuS2R4QcY7F8FftBWdadyeFNcZU2hK9NFMDDEQQ",
  "key13": "5UWMWBEcxZhrAk9nvXTLRe12yFqmLQ3MnBPShhjFct4i8vb5vtUiBuwpvik71JYnWz9JJAsw8FzrP6VEPnWn6HAq",
  "key14": "41GMZS3oAN7royDS53qAsYavCvMZ9KEGK1gafeFDf1QKcnPuXukY7StoXcKVWcDmdhs7asS92P6iJkj3g7Wrtu3P",
  "key15": "5UFjqpCE4hdpGdLu7GN45Wza8qejEXsQpfNmUYhKFU5muwL5CM1HkQSEgK2sPLp6MQzFfBukxpz9ZSE92Ss5dKsB",
  "key16": "MmkYyAtosdFVKfPcRmQUCHsfUXmQnVWm4i3w5BHypJca5vevgMn9e481ZLCapbd89ykBMGwWzwGoz5hSUinThgo",
  "key17": "4L9jhPmWxi5bzYELf36bwhRhoHzG2Mymp3N1LfjFEEBsC82xzCTKz4FpvsFMabPd7hUi3wwRaPrNYhuYEfTDkZBw",
  "key18": "65ZSwBJegBZiMAWiANTTRdG5DqTFNELhunzA7rFfvMvYMTvtV3JuPMCHrZ6Vx4HdTWP4iTRxDRy8KreHU7y2WrSY",
  "key19": "PALqYGHTq56uTi6wwfSNVFwyby2L6DvjV2UVt6FsKiiTFrq9MuB6gHVmPxA6CX9s2rLoSyJJSHGCdtRF8CuQE3i",
  "key20": "5usDS5baGNRNHVVcMnmiGRZFRYW8sbUNRfEsG9puTDjUN4sJG9PcvxyQuFVFGCbUpjMFWpTu5tMbozTghvx4WfDG",
  "key21": "47dHfdgss3uaSiPcCRXGdRgzV3TpA7Q2Mx6K58EsToHcvh3UiD8nYZ997yN6186iDc9AezVZCwzBdruNu8De7zRc",
  "key22": "3r7RtbtyBW7ZKdthEPF5zZ4BztkP65GcKoFhCbmAuE1gbNeiAjxm7cpm8z8KXiSGbNHbwFvpbrw4pu5civvcSDSy",
  "key23": "2AhvD52TWZsdyhDtjnvsTUuwdsC1UQYJFVPzQPifVUbZp1Z8UjpR8Qo5FC98JetGH4xb3jvcHZZyqWSWh7mBFNu3",
  "key24": "3JyciWzsp1cXa6r1HxxKV37ZLVpdzLyVPx6MbA4jLf8zVcbA3jyMVAAArMfrJMUDG5bUKWHAJexu4wKm4z9uJD6V",
  "key25": "4rDC8fMqAjF6MXRK4A2Kp5vCfJSFww7QcrzkTpZQHg4vkXg9cv4BkHnnJK2uL1wBQNvw5eoHK13rj1baBG1VJ6Ke",
  "key26": "4HuhN53foTna1fH6CPV4JE54XG5NrFuyPMZ1uhn87wqL9d59mMbMRP9MV6VkWUEYN2G9xte225MbWmexWhKgho9B",
  "key27": "4971qQnjYb7AB1PTaTxb8ABi448bfsGLqxqxBCrsKuTcKyDjLgbTiAHZvWK7tpq7rfJJtJGG5ZovTit9chNfmfeB",
  "key28": "4BEtSQ4DzfpcJ5BqnqCQPrJiTCEuuQgNruA9RyXbMaHjPPog3vnWUF66nJQN8BD8Tu1PHf8zQSEYs3eCwrrbRJgN",
  "key29": "4ftE35LxXaGb7koBre8HtfzStNArVu9DevkxhYXNRzWb2VBkYMHckicokYvneE9LkqsLu4ptLQBd3XYQzbxfhUEr",
  "key30": "3u952bTAEpiLU2xTTWrVoJqBiPMnnrub2rpZkjCcoot1RRhjVs77iT3ccoj34UA7n6tY85onuiurYdAwHEbiQHX2",
  "key31": "34oJAcRvE6EZjQ2nz2gwtr5nKEfsv3L9zwYkb3fVS7NXkvP8hfXJq232Rget88emqVbcqicVGqGTGEN6D9xyPc8t",
  "key32": "3mDBba4VVLpZBRN84DduNMQmhSStDSK7gSMhwYvQQ59jqdxH3ncU8tEmU562mg5YJTve53qqjJJ29a3DicRUQbEJ",
  "key33": "2zHKAGtqtCicF2szux8mgcYs4TbkvxdYVb6s64LBNL5ete2EAjJpHv5XYRBaNjjcutJHgjzGAjKJYdgqzBtTrWjw",
  "key34": "2JT8bknBJrb48rgjfqm2ynbgpwi92yLi3a1D5C8oAutP4MaKRPGCTWfxzwkmmBagRAeAfApWAdot4Yt1YoUWBhwM",
  "key35": "67fc9S5j6uh2wCRrw1F2W5KE5BCuWbqFBu6ZLAwARTPN3kQP8jpV663yhKPP6QGesjW3WL5jPEdTnAJGGGRK3cdi",
  "key36": "37ZmgRhzNGPPPjiAV1YwWBv4wKS6jqNG3jU3AZWqAH1GkhnbRE6DZtRDQ9JjTWD1DQoyw4Ze4MpqsFXmjrFoMpWm",
  "key37": "5o6ZKuwN6LysGja8BTiU5ZnY1Cds1KaYRDG8jwEgsD1cQXzcSpLd3pbBb37asxDcGbUK3hWr1HRqGn7we18Ubm8P",
  "key38": "sCHmAjNAVtG7VPnofC4oZSBJxSGSyzQW3cxkL9ViT7XRULLfs4zHUQjHYAiNEBLAT8LKpR1RgM45xS8iEnXBr41",
  "key39": "62exgiLh4xA86ofMXB5R7ryL45Dz8EkvJYxV7iWnrFux3fqMdJMUdUTwzDt7UwdP5QqR3P7rqEHYu4QdhCM9uSMv",
  "key40": "5fBJbCkaMZcxL7zBZoQ2kKecaHZqJKmAdGdyatzPBCzSQ1XeAJ9jgctFMR3vbYJntbXYmYN2kgGtjGGBczYAXTzM",
  "key41": "23n7vULrkVf6zJRZ7K8ndHtwbxQ5gqouSzpb7uUZwZQiFPeeDo9N28s3fZpNvAn8WxQ33YxLuLGtcbWYj4waUj8r",
  "key42": "2dxgnPAakUSnBktw1zQSNYA2k8xHobLx3YoJReEtdWMsP8kT5tRojLyBqLTMiRApEkdsHT3j2PDWSB5nim1wjUmL",
  "key43": "26ER1Tr8HNC1s5gw5S8ZjoBM4XSEjycYJbcNCZees8wtvyQZfrdBNR7JScGDnU9EV8PTJFqobJVxmqvT74TwLmot",
  "key44": "59XwTwAbdrHhtLTXdHVUqLJBVe4rz7acHcBe1ieTpLyrMTEXU3MXKGXLH6XFGBaCZQvcZ7D6mV4ZhozpuJDinPsm"
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
