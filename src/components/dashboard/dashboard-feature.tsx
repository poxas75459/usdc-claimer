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
    "24v5r8LRsecbSm7g7sUGbbdQHmudhVeTj7Z8o17e8nZnw5fg3bReMgLC9wVAjK1iqteH9Ses9sTmGWxg8beTkkjT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5waasrdfZMVJE9iGSTxBZShSXjK9ufjbwCzgfSHv1ip41KwpVv9RW5y2NrCPWoaTBx4TcH2t5Kj7Afe5YKEyK7Gq",
  "key1": "5ApUFPxUaRxneV7NubhQHkvtXKBfdrBVzCR1TGjZQ1dasFUrST5UTciFWGKWLqJ4DHA6f3P7bgExJyMf6asoVTFP",
  "key2": "5BkeNp1UKaoE5Uve7fSptRNStBLsYXqoXZnpx7HevPzJeBhMU2d2yvjMBrmLupUEa8UzWxHZKsCoPsva75TUF9LV",
  "key3": "2LgWZ8dN5xUssuhj33um6abh6CofAn2cC6tNa1ppdqFMD7RuSchxyq5wtweTkrX6HigqNFuUbBViEqKZCCtND4xv",
  "key4": "27qBh14oT6EXbFZQ5r9cUuLekw5JiFL6pZncrRUrNFeuW6HJfA97q5q6pN42U1h6ycZ1MVsu9pDPQDXrTw9qL8A5",
  "key5": "5Md8V7wF8XJfRGj97nDu2w2NWAuCRH9nE2jgRsYcbCzG1VY2gnpd3d2FRxygZdWj7fBB1Fdk1LPVMidbfAd5gHk",
  "key6": "5S5sPjeGz3ZAfZ4F75dWqG5PZQbkPHS6FcY8YijnHMVvdwTd3ozNZsuDcDmwNemkUTHz6X8VVKQfWe7yhq41R8ih",
  "key7": "2LUm7zaqDGYXVmymbV22Gfmjcj1wzNZXsMajFeYz2CGCWadFYv6DL9CB5oaXfyTh8NhQw1rsSN9gBTswPwzJGnP4",
  "key8": "5aM2BmDzVFSFAbBVuTC67zuWKd83HdBuDFK4VW7Qm7Z9WupAEf1WFyGXmAYZ6pFY9NEho1zc3oERf9tfHgMv8nre",
  "key9": "fXgveLfRya4aFtEUHP4Li8ifBkMWrtERaPXUejx7smwrksGKYpEfnTi5gwPFhqVmkp2mmiEwUdmK1xhsPNAT8D3",
  "key10": "34vHp5N9dbtJUd4zievSa9V4EoYbdU32zwMZu3pnKcLt1vxRcFcaxfqDV6QYvBxtcd4omfFiXUxELFgMJUcMJN3c",
  "key11": "5Qe5iZJJGfYUGkYjDJcX2bZqbv5h6pcfqURq48dqGSSuneqf7i3aqANKiP2NGGzhitJNwo1E6BRdDKwr9fwdLV48",
  "key12": "2x5m5TkxVngLWvnWGJnEDesXdbCUzhYYTN7cnBL8ActV5XXaS4muQf9LvomkSPsW2ofk7T5ZD17CDBCHK9PtXgR",
  "key13": "5mgMZT6W12cndpYhmArytdZSHmiTZo3a7H37eXUJEVcbD5sF9hTtUapgoPBS8CwFcKouuWCeNVfFsEZrMRT6pcYL",
  "key14": "22a1vjKSZFBRjA8RxdFVG4f97LavyYGCK4KevwxXHVizSZcCZyHJ8pZbXCXj19pCiCgowSDyNx1XceAuioM6vJCj",
  "key15": "3KAUpzDfH46aAx3zDoTafbhq8ixMjNnTvKEiVQsSybSpM28KaiU3qnxZQtbcAJPZgNF1SevGT42BK6Tij4gRSctp",
  "key16": "2EEth1Ff44jys9HZ3gcSuVkLhuQsAgREFyUJdcQU9RzpbjXqFFqMbWzZ6729WcPqCEczp1WSqHPrpDnJz7wrCLac",
  "key17": "5yvMju3iZdFZyP1bdbDerU17i7dC3CQR9tbgobMhcNSL1QX8FkupS3DDYrzQiDrjj49RXEEtV7AdjvryKE6UTQ3e",
  "key18": "5U7skac2bisQvFVcv8S8shqQqKCLhc7GGMjM26LuRMGMqwH6kJyUBXSVJ1wEoZV9PUQq4ixn8t2Y36AQjJywxeNK",
  "key19": "29AvbdYG2G4UQAsSeHW8C8CfKXfqXdWSxPFw2edJjx78Ayag4TTS5XdCjRqFE7gcHzveLqsqPh5ZrjL8tZKTWJFz",
  "key20": "4KBRFpG9fXQNgQpSsQatLQAid9UtpoY5j76ZrGsYTQfNYk4Nd4khX1PFrSrwbUj5axY2mCh6S2ix8LzdK7us5urk",
  "key21": "9quWEFPcvx3fJmxNjEqF71K9312vVdcufMruQnRpdGok1bXSJPVgipkyRKPhnFRSu6ALKcHbNjMUoY1TuZkpaAB",
  "key22": "3ZQVjBAEiiuBc3uiqCE4ja1fAuPhq4e8gf6a5ay891itYYfuz2ELKQXWRZWwHAruTJCfrkXJ2wuRc5bQDjVwZ3A6",
  "key23": "qQpeCvcoGnQmCgtiaYbALtUca3eVzLEcDa4JvpTiQ5bku5LTy36oLLM6VQriFEdFqzrd8hG2Rb1WEu5DSgUsUCX",
  "key24": "ZfJjSMTmCUdRoTRWffbtnPFx4d61zz2eAwUFweUrJ9PKQesutqkg4Cda8h8MJ4rGjE7XiLC8trCg7RtrMWatToo",
  "key25": "2u7rc67qLN6YQrEDntBxTsoWGWaacLJCZRaUx1QebMZ6E9PgiunafxbmKVFmepDt16gEaF7YHz9jydetkinWoaNG",
  "key26": "5m58tzvxWpprjsFd4MSboZnCipjdA7bg7oLXBe851FKLnnv5527VNgHWcX4QDzoPwCM2jkepjiFVQvXBffSxfDsz",
  "key27": "3Cr1a19pCYpZvj7QtbVMVunVpoacMsmwQ5VFXYsHRLN6aen1cZfm6FMkYBVzZFVwmvjvPMtiakwhpB9aja1tmDmd",
  "key28": "2qYuqcBX33Zy2fRQ1c4jRKd4u2jDy6gx3B8zb6hCFbiHWgdWYdEMQZo52c5EbKqvfzuZCdVFP4gH3hzMETdep3ox",
  "key29": "5wANKCpFvvivEXjGrqxBK1689Lg79TYvuMWNFKrj52VN4fUZLRQWpQ6gJjafPPDtHma2ZGjNno47rAfVRNMMTD2z",
  "key30": "3MD26RGg49povN312oh8SdqkaXZaAg637XeqvUtxCGzESCyTY6sqKvx6jD1o5kZgR1aNfMpVtWN7TW9VHpy1T5Kj",
  "key31": "2ewTReDTbZsGi3Ay19ZRXTW5PE1CthADxcUJqR9i1cDGLLG6eP2Wq6fefGE4pG4dqLdKwHypdJvzyefbnEH5bazz",
  "key32": "qEkK3vifSQs5YCE9uuwbNToHufsh54sR6ntAqS3bxfL7G7yWsmedciJUpQ4PAgGRvRrUoFrSqV63DfstX52wfpa",
  "key33": "2NJvFe8JhS8i6e7qiQsbdnVBuo65WDt1cHJ53m3UTN7a6JCNQAzutPP7wW1RVWNRpsurYGtyh7gw8HPAyvpSWP7h",
  "key34": "4YruuT1UhL9r7GrY99Nfci32YDnAaBw7Rc2D1U1BDeyuPoNJVbcYGC34YU6QLi4kdWyeMijaVCzLeHD545Q9vGtE",
  "key35": "5Sop3WtRL7FW3vCsDYMPnskaS1Ld6zoamrL7wydP4qrx7Dafo3GnAaRZMmUn95hhgLbZX3pDJhFn1EsG5htPHdRf",
  "key36": "276ZG9kkT4tprJgUAk9kL8tB61XrWKbcE7eYrK8EzJ2DsNyLTzxEKZiG7pxWgX3K7h8fasdBUxkecbtS1Et9iobQ",
  "key37": "teDD2hGdmpiBFFyY6VidncqQx98vqNXSe3dpLr5Pa1TeXXqAMzWFUEvPvVysxviczuDR88SxD1VrK73wT9fx5iA",
  "key38": "3VcnJHXSQ1XUSMtvPysvS4mkfWVvmqftnss37p3DjDUVjdBJDKDG45AWvk8tJS5mJLpUHrYmi7k62UdfXtYPDiFg",
  "key39": "3ioUzTZpnG3LYo5Nq3vSEyzWj2YraW4i47Qas3WjGMe7f14deaBEqNX59To1bedTomTBbyATBF5VPD1pohDxR3Gi",
  "key40": "61UXk3Zdr5RcoUXpHQ7W4XpyRJbvv9jokVJAC1z6GGXMfUjaridRn2wNaXv6mtiZKB5jZvAX4UP7eA3mYwtv1XdR",
  "key41": "441TdXz1nrZud2Pd1HC2v879zT9ZqSSaJmgokaXsdNHWgtx8psUPrPPa6czZDebMRdPjBtBvWxaqbfpc6VVJaa7p",
  "key42": "5RMR5C5Q92MoG2gt1zQ9sQ3KEPq3M592oZqr52r3286kRXX5Hb9khtzpNvWiUH62mnE7RP3HYpyvSCu5JCn1fnC9",
  "key43": "5Gg5UAkXJQaFD4KnKyJAcsovRm4JEN6wARVcyvfbKnrpTdRFnvX8iYRWpCieQTLr3N18ARnfJyHNBaa3vt57tZ8s",
  "key44": "5K7YSik4JNDqxeDpbBvLDi52UgcGY5H1uu4qvSnr8si8nbUAHxL1shcdtfFSBvqpa5oFjB6SJvAyeJ2LeADM55Yy"
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
