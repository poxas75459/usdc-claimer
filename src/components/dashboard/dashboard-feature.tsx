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
    "3raaFqdfaj2zmAXPRvmaGPzS57H4AkqgCCV12fRzH4ivSqh64sVziF3UcM2jzQKAgTghBBog5gJVv5TMh7qfB3GM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "656h5ARfN9Djvg9sMqY1ynDHRZWZkPQTTtw6cwrhyjkhc87RBZDr4uV2bfHE5KUpM1Vx4nCKQzkLhobQreNZz6f5",
  "key1": "2wP5bxfmUqAiK8DLdjN9UxR8HXvdtJW2ehtSxkFUuxRegXcnvni7K7LoG3WFHyPa6XZRHpv5T7XFzrZpqfy8otGA",
  "key2": "3dXmcdbg19PDCmd1vsNM73Lr2F7oYxzzCXWtJwiU1JDnwY8xrLvw3DkZ4Wo39SYYPpbiYnFSrKKnZwNzKJwyka1G",
  "key3": "2AXZR3KyVBGHC6GrNsfsztAHeSAoPSJRoBnnzjV6gxh6gidSgRtHt8iessXGTx2XqWK6phhFmcjheBwWsNTpx8gF",
  "key4": "5ayKHPNBkw3cNerif4Xhz6p5uUTTwQH5oagGzm8nxNev6tQQU8NQHB3vX5evQ994ZnrSp9X9hbdJweH8N5Cokxtr",
  "key5": "2FhgmSfYLF1DR8X6cFfgxirug9Zx7MbAddAfEvhCSamnVgJLpeV1nKKU92Ehwnnek9rrBA9zCnWf1RdF8QTp481e",
  "key6": "5NshQd1RcXLgnvPP2wp6omiVJDEtUwDws6ypsyaJZj4hBzzaicuwMz9gcxpTkmKMRYUZV5RDfgbYwV9dyiFcEA2J",
  "key7": "36pXszmryQZpaQpdfyqisGQW7m5obDxpwhrNGzSdyrRc8UoJEfj4d4ztTSF51nGsBtjup6J7GrUVP5sJxjPtaUdk",
  "key8": "2eZ66o2SLES4SYtra7SndadcsbVHqfPynYZCnYsdVVPuZHHNVipYCBdRaj4mKJc3dQRrmYq7nUEQu2JS6zeV93KD",
  "key9": "heDmP3cpB2rx5s4TnS6KXeopFnZ297Xhq8j2bdi2TEGNNMi6RZvu4J5KrdzYaWMn23aU53FLbsr5tHdyx2DFq55",
  "key10": "2mcmBRdziPbUNpoJ6XJJLVEutny1s31MTMAwd78uxpEGPvkqYX7qgtDZfzoU25jDmD3YE3WF1bntwt5VNk3W5Nq1",
  "key11": "4ScfgUtv3DyzYaR88manCFk6zvMheshu2zTqKUZcuqWQnTjzZrA4U2MWPFhL5t8MwGCKk1z9WoRg1N7QsH8H8yW6",
  "key12": "5UygxvjYHgV3pAyE89Jdn3YPzNHQtHqpL7kbcmTrovTmrYEwnfmFANKHtgkBV2w78kvAs88qpMWv1GAiwCzgiGiD",
  "key13": "3ojLmCpirEdeqxhrfcpkwPSjmsAXqjfGKNPqqG7GjQD1MJ8jvVPcDgDVFRmn7BnDVv7ETmnJfS27WQjHEg94kRsN",
  "key14": "5hPJa71cEr2AQeLjvjunqo37SE3bZEixSvh1EMTHwdouke2xjjd1qWk5gZPqxznkmKzC7Pj17cbf4wkuEEHBh2Uf",
  "key15": "2S2EgjGXEQ351EFp1h2HPmLBaPsJoPvTfBgDmGMeCqWzMKqEtNnHKv1Xv2sJGPCCvZxS1VMEMBPN1cWJZ5o4NbZG",
  "key16": "2AkrVsQJTFLbCEts8UkQJJPKagKrK7J4kxJ1srbwsf2FawHg3NNcpf71hCQTinKACzmUPJ4yJR79Vf62vEZMfiYw",
  "key17": "64KCM2pVxDrntbNMcDTEYeGzXWHKEsjPSf1iCDQTdwrjEyAwC9bTe8gQRYxHkLBYSduF83XkwatuYbCBy1tX2LX5",
  "key18": "3K4QXygLcTUVFyMVxTeH1HfpC9L8gyRKxsQuQnkyaRKhndVvnAaf7FYLVq1N3fQVphEJbZJPhMn4Mu9yWLB2nMeL",
  "key19": "3Sr5ZRUPBXkDfnQYeTh8uUzfCv61BNF9yMDXGoScCq8RR8Lv15M8GbWSFirVkDQ5heUr15cpSSx2gu6DhWzfUKzA",
  "key20": "5aBw9PQUNzXgDnDnZmjLRSr9JmP55jhkhfc12nVYbE6H1VdkpEUSyeE7aXo4LvcSqjRwfew3rc8bwgnnMyevtXiS",
  "key21": "3d8JTmhS8VhYaxZDCN5JSFDGyADM1cNE9HfEtvaF1Wr3kikrLEtqHGNkgcvHwfiDnwcwNNKN1PNPPAW6DZcKYhGB",
  "key22": "5kW6z6JHhXXRiGPyQ9DYi9VFBY71UGRM17e7fFap927fm5wkc3eh6qqAAEY8hRb96sLtE8pURyidvseBzdLpj932",
  "key23": "2cwQAczrxMZAJ285Uc58Y5iqyuRQnt5uhH3BU4qUNpn6QUg2aG9hxs7r6qhyCjwrbPCq6d7XazLfEnjGMj6G4it2",
  "key24": "4zBjE2ah8RJkVui7vyjenmk84q7ok36fZbNg21FWx3xuittFkDyrLkeNznEGqhmLiSjEjPgfNqMFHBsAJau4d2eN",
  "key25": "4hx7FHSCUyexQbdE9157rVNgNqc9rfk23TznFGcDnRusEw5SgWjoqDdCaRDV8SdYgqqZb1eVc4Wrgkvk8eo2q9Td",
  "key26": "53Hv31jxMaMTNpn8fWceQErgAyhU64rPPCUHS7NXaaiwzzLjHcs8XBEUrGMLzixEs972y8WvxBRuGkasRQJt8pto",
  "key27": "9pjvyvCk3w5vsoXCeM8YUZXMsvwAc6drPAAH8uxteHvgbm9GgzxVk2kXxRospMFXNEoSxXWTkwjYvvVNS3Tckmb",
  "key28": "45YiTMUX2z16k4ZYnEwoLtxqUjCZcyGyGg4R7BbENzPjDjGdYVARCuEjHJsM1pLW4hvgME1ndXHULVqdx7gmdDgM",
  "key29": "5PSYv6VD6jE7SGQoZoqyStrCoqGcR6uLSQ7k1ZF1auUDiNm9YqQnwnCAXi8MrSBg2XVDXysKsxNUnAoh5PsGLVhb",
  "key30": "4v6iKikXKFYqaVJ8UaUM3QegWvmvjsxBnRTN7A6z5wCYV2sSFmShViTZb4ezK4dzYg5dyZaTZVstya16f38qxn65",
  "key31": "3ccRaigY8NRHjktWDCSoWkGqetjyPGBiSxPWQj3TsNDpBotHfyQBiqUFw8rPJMm8VjYjb7NUDKBepfBKu6HS7NaS",
  "key32": "4AEe6PnbNV7qfqPP2RLvvaVD4W1cLeCQdPDd7FGHvtTFxVgQV3qzUgNx9NXHP8nNMb7K9D17MawWPGAPctCxmqbZ",
  "key33": "4saFJftCVwUJ1NimgAQjkAGjWgKweuaVm8YNbjce2vqkQ9dcjnAXxN3fn45AWbafKEsKVArLtnSCyREXAGj849ej"
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
