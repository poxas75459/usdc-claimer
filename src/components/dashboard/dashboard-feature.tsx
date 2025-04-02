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
    "4rAGyAcM67PoumTVbYPtCTTDSPe7Eoz18TmLj7BpTaptfBf2sYTjfsCAmxk19vsGVTbmDw6SvqSAQLVQREAF3Pbb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yGJHps1KtumNMZg8YEbFWJaLZZxVkg5rM4TAYN16bgCLdaAubFADD9xGHNRSe81X4M1XtpEzNMHdhCofXcmJtdi",
  "key1": "4QYi2kQqNgczXsGx9cpJ77Xi9c7EjP3Hw9ywWTYU8N6idJYENNsHEFkKrVyPdPnz9cLzW1S4N2XCD4bqdjCJXXju",
  "key2": "4pdkE2JmyPEzz4yfx8Du8f2tVsspftXZfhdnwrpsC7oLrg3LkWUfaepFnydeEzNhHa7rSYSqB261dZUSQd9pYkmP",
  "key3": "2fJj9UXH1TgLLQLx16bcp7tZt5qEzbh5WuYQipHU9iG8KNJ6yTh64a1Bjwc3kGD9TmAvfFr3rNAEcAFaqYxS6shf",
  "key4": "2TK64bk4V8FJd96EufUFo6GXrfg4ocHSvcxm4z9wZtucjx7XvdjPkWJtRHe2ehysN1RMSHoNrL37VcWkuBHGr58L",
  "key5": "5e3LMkFae2YQSPAtFoN12k4Pp1RfWN59GHDRyZHWiGx8bRjj4kq6WjV9QKC8z7CPt7Xxi5oFXiTGxfCw8FfR7JVF",
  "key6": "5MLFDdCyx86hLoCRNi7Zn4ufeasad49REEAsx4hQ8b4PVuyEuyhV37uwXzY7hz7NhEBsJ3LwgqDqK5wdY8pkaQRZ",
  "key7": "Xf3JNXS2cS9yJKvdCYZeZ4a4cxLS9EDXYZpKARwkMYLpjnrkjTsg7DPkpd4rY9ViJGjHsf7hJaDb5GdDsGpbxRV",
  "key8": "8xCgMDWe31vqv4RvyNGnTPGQnsPFPLfKGokP43LurAWDoUU25L7zc9SmupzEQaJ7UPgRm4V7HVst9oVsqDyVW4B",
  "key9": "JJLfGbwW4Y46YMCJcWHgHUbjJtaAoB1MjZz5RByGmmYKcLeC32s4kkU81EzNR3mCL8SYMtQurmGU7RiMFRaq45a",
  "key10": "FMVZB79JjF8EZCjnpqpygcLY3Y274tjncG3hSbQ74H3zN6oBqnyPiqx5yzHoGzR8JepwhmCz13JVWxBe77PigxA",
  "key11": "3MkUeD1Bf6f15UVBN9MpDXmMuUMjbcXoS7EPu52TtvRQWZ1YfJ4mrsjR1YzVSCL5jXCrq1X4GqQs99ZyYr23T7X9",
  "key12": "5HH4Fyhm4fpyAEotjc3tRfaaiz7qC83EDLkTeKcZvAdf24Tb1fasBZf6h5TS3NLFou5ha4T9CPieA36ZsebKaALG",
  "key13": "5dJwNuxndjBerMiXvEysrkq3xC84YRxpAkpHQT7oVXNRxd72Ja1koPT4YQoDEWyCejmHmfUZojnzMigj9j1dG56S",
  "key14": "55sGfnnPzbreXxq5FZcLL2NerrBoBL5THazgE4LyrJhotNU8Lc6b8rHcBUh5kVF55eCA8AAd1ecLszbTKfMH3rF5",
  "key15": "2mXbSaheUz9z6FcjNZFpB8eTFNrm4ESmX2WRz5acwZEbBikJgDEN5M3W6p4rdgQz1KwVtKQGCNjgtSrV5aZ1792q",
  "key16": "3R4Yjco9A3Fu9ZV5ku6gLr9KqtDweVmiVuLNciNUYAsVwLwuC9HmLcq25RVkULHnNVejmMtAhTTiF3K26Jn2NKee",
  "key17": "5DUfVfuDYmo8ZbzkZZbbvvpAohj98dwJLQSUYqw2atcdJ2JJFkvvhL1ThtgW9zTFsQXv3TWsRNcAZRfZoP2eBzGH",
  "key18": "am8NHxiWxKy6BULiT6gYwAjN4jheJxE2iFku1eTdAdbawHPc5tnUESeC84aH9eto5EwCPhTHKD39KwEaaVvMQTF",
  "key19": "S5J85HYHWV7nPNrkEcDBiccjhERqboMuZfAYq1MRs9fu2oUrAxQRa8vanptENe11CJCWRpGKBd2nr5HYXUmoXEK",
  "key20": "2QiaCwVv4xsjfBL269UHyM7YdGPrG1P6bob3cCuEJx1X2mdVWizLpQmSBEZjebXWm5fy7oP89SXh5ceB2Ksq3Cde",
  "key21": "3cuUtgNymCxcaB7t8FKRgTj15Wm1MVM1PszQsAi8LitEeCwEBB8ZV6A6om2dGhEHhjBKWny8zkEo4dWTPg6bjqzj",
  "key22": "Bxk64oR9RE9h2ur4zDNDcQrtH361hS94gW3vEEWRDbhJr542KTJqVsjCPADpU4EcPxrg5VUW2eRah1d5uEysZ3S",
  "key23": "2xntWj26YELqP8wjLTz8ct7JKKRjfp4T7rpRSnq35Xo1HC54w6rfwuV4mWZhRXgr7kN34NFJwh3gbvkGftDbsDgV",
  "key24": "3MnLYrLwktwqDNRPCogEHuvPQ1EEUojVAWSLpKZmvNVyj8iDBxjz6fBkrzXdFm3KdN9Hgy5cjrov6HTavjGjgCTJ",
  "key25": "4TcCFut8NEZdsUrfYWFBPJApAABk1eFqbQfdbd5ykWoRtnRRns3zH8iGNK69wCj4WSr4CBUFX1341b7jrpDHN4c7",
  "key26": "4Hq1Y5Xc1NrMkiTnzxz1PBqeh7rMeEzwCZW5FS9LaFeBvhUg1WsmGXEjUhCrzEgStYJgoXohHWjanTYEkqN6dsUx",
  "key27": "2fq6L8iEKLWLN4fUawPToNN1jSpzFMcUxmtM4i1NDZAbqqTcWNJA8o1AL1GL7iWRo7GcKmYdvzFJpTKUXMBTwxsk",
  "key28": "2E9PYWdNaPaiBUtTuPMia8nVnJa6YF3hdD5Rzu6RJ4RGmJmr543FiFgFWhkYGiesUCprWuymcrL4J7rnFj2j3Fty",
  "key29": "4PzKbAYLgSVFCNDPW3btWQf4ZjrEj42nF7mVEnes5MiznwaX253f1GBuVWPXpXVMz8cSVWaFe4J6Lz8jkhG6XTFo",
  "key30": "EWadTaaF2JRCwuF898VDX9Vs5WwDWJcsTBkcUc6sE6a4sLVZvWg6JkH322UfxLpsBrr4F2e793cRRdpRkD869Kc",
  "key31": "49DugxZHEtSLFdi7831Ax5tRfxd3tMHB2EdHKSfezeGkus6trrGjDHEdrmemeUKSm1m59Fv7E22FFSGsmpN8gH7E"
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
