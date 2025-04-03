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
    "HLHxH6pfCsjAX5iGEZsruY9cm4LufcaXpcSTeWSHoSmU6WHuvchwTxHxNHGSGiE7KEY63g8M6TqXCWrF6QjeQ4r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uF3C9yyjiTjwvYvRt3MZLCuEvtkHDiervQeERf2wT3bioDyXaZRTcwPvwzuPejWMuaUkTWWWvxLWGANWmZXanek",
  "key1": "2tPmxZPLAZLfrCBxJsWefAp2VJLYXpcoYzmiKTuZZR6GdBF4mubDTUgFDhKAbDQMn4DTKwCxzZmR7UidXyZG9mWW",
  "key2": "3Qy16mDEcxqjEkq5dGkw4Z6u9oknrjB1SxVFp5U6yMpJXkuQnwFKbJEH8dnn49fpeGB5NWoSYp6n3xTaCRn9xmhj",
  "key3": "2trAAgQZsAqn1ubgci69L7WPQSvsYUKw7qaQM44QKsv1EfG75wpfbTiRuDHHZGpPmZU7vxNMwpYGZkJxF7R4u7j6",
  "key4": "4nHYSK8rUh5czAdymQXqdoHpwSoVxt9amqnxk85HmhwDhrGmwmMdGemhnYBqgNdHeTEBvaMJi4NqdTmAdfP9m1t6",
  "key5": "2JqziM5PTPYr6mgcmHnRwFTNpChZ9mttuSnVUJ6j49CiquWsTpZUEAMpKFd4cVjWo9wWCELwAB2S1puJj4niub4f",
  "key6": "2SdHexLV1Xwa3SVQon7odHogkjx52rKWgyFMdcVGeTW22M4SV8U53yG2438CBNWjtPNrVwzW7u8kDM33Lx9PoJdE",
  "key7": "2NoZWoQpDQsCnCjUn9PLAh2tTyxCzv8pVFVF3g8AKcsFe3K5ToHALTMojGtypL1ifvvcmrYgigv1ZDwoxLDWrhfs",
  "key8": "JDHVbVMuVdmu2gNiqnEQ36zCoKf21Pb5kB4Kx1NTVoScmjsFdze97w15Gqd5tjAGbMeMAMPoMSYLHEMoyTwgL2q",
  "key9": "2DqsK9jWRGjQAQazX91xUb3Ucr6s4qHQcDXfyyfKMvu5Drd6fZXy3tLegkgmjt6uHc3sPhmsK9U5u1Tm3sA62gmg",
  "key10": "4p26tMuged4hwV88PURJA7JjPCDwhjPnxyEBGfqoeKSEeY8FM9nZ95RiEoH5DTG24xPZgoKuMJo4E785HCv34Y22",
  "key11": "4RCKnRv8LP6W7rc5kw4u5orRHAYFTAyQdskqod55p2V2td754eGkYvSY6cd2GomKKcYVs8FPawn9hrU5KQKzhEJS",
  "key12": "2QeYoqku8fwmjn6xMeHgDon2X46cL2iQf4HK238qRTHx9ddctkUFytqVa64oFzohausRP4aJJ1o7iehZ33iQVdgV",
  "key13": "5WLBhMAudSeR9MkTm9ScqGC5fCh7YokeTWb6h7wfB8AEXELBKL3XpsR9Z6x6ggiYmH3V8i5deg32xPUmbjmZNgQj",
  "key14": "5sjvPREzDwf1pTTLG25FPXhbxTDUpZXsdmQ1LkKvDdbSky9phBNAndkavY1HsjqGgVzHcKTQ5RHqJvy5UvBu7jbX",
  "key15": "325S33uynLyg1vrTNbr4g4g3Xn21UNJrcka1ojN1chgBsfWuvPWfHZryFLskufxKKa9wer91NGXNVg6CWWid7Jmm",
  "key16": "2VNMt3Z7CGQDNG8vQjx71cakwjY53GL9usPJLz42N65w8zSjnyvzyskWUdEczVu983trQN4uXZWVeVw4tjxDrzHG",
  "key17": "2chASYqSaGuUrXJkS2P7bEHJ2voYmBZ3dy8WZoh9BVUn2WMkyVjXfcTRo5vaA9CL1GGhGXQB8LzUB4Jh5n3WqXAe",
  "key18": "4hX1gaSYaYJJyzrr8V6h9u3rMaj1JazppFB6oDvJ3JEvqPvXUQ7iFthoJALrMqidoCieW9kgzpTJTPzmYWXo3moW",
  "key19": "4YTunYJPVvGEaLkteE5Ef72dEUgWzEkjBvMQ4W87JVhpz2X3aMr5GykxdZJy2tEYh8RoVJB4dMPq2XNhCKreR2jz",
  "key20": "bxaD925iv2VjyrRNnZHzgq9cfLBAtmQn4KcxLn8NYHG2QnkgdGh58KbuW5oJJdfD9CrnwD3pmJy7f3NX9Qoh43J",
  "key21": "x5TdUQSpYcTib33n2HhhRm58LNHexATq4an4zsAuBd5PBP9ooqWch2Ftv2JpbTfjUAKGS4ooCUB5ZE8wEHj3GRH",
  "key22": "2MB4b19WAtznbhshBJQFHWdiQVp7524cZ7UqWhthzATHBkoTAPV2V51L2Ff4evUcSrDJtZYYkTHb5XCZdeBtSUDi",
  "key23": "4G1MtzZwcv7quo7aWFRvVZosrjeAchZjEjK9qZvvTPpNMDSfdS8YvPmaLUahWTfj4cJnHF1PebYVd39JopzU9uCG",
  "key24": "29wNWnkXsAWrP4nDBDHFVgRaZnQ6bQvcu8NeHpRAHCfkAZuZRpQjCpXTadtgqmH6EwtUX1yVNwbPhEJccoCzUzd9",
  "key25": "2HHCzQP7fFb7WBbHme5gqJuZFn5E8qEDNP4H577jwyBF322VnFBKvFVoY1ihZbEtW284cdRCrxQ7w479zYEi9U8u",
  "key26": "34KidzC88MyCuvsEEkeXXvh58f3hcjpbS6B9CBZNmFuxiz9hULQJupChRwTyjUeCimYhHNgTy2Y2iBmqF394gwJU",
  "key27": "2VjLaggqGZ9Y3f2B5bD2EmYNAAE11Ruy1RsKP2dBUGGnBWqT4F3ffY23URz5Q9KHQvAPmwd4UvVjM6GVYFJVcHPu",
  "key28": "3MBmy7EDJm8kVo4PzU9dps4WhMHEZoqXpTGY7yXHajfC46uKTUeYYdEsyWT1ZM1du3XpT27m4AanZmNaFVfFReRG",
  "key29": "4UgP7BxKthvc4FBJFuaNEhHRzLqvcMSchyTNvzUT45U2E3zzoPVxvV3JzncYXpPwBwLbyVTQR1cDwt8R7opRHZqM"
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
