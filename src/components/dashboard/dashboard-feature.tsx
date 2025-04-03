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
    "2rRm5ggzMKnoVLBHMRK6Yoa76SAkehCvoBs8Fg6Sedk7vZeAgbya5dDE7eGe2m7RBYJScenBZq5BFZkX2punDgZD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7eUCaffRXQ7pxgGHXydx4QZsFF1z9194PsENYFgFGyNYS3DzSLGFgaw8mfRHeSRCPrpkrB3RMmptdfBa5WwxpA",
  "key1": "5hxwW6QKj2oM1Luh7gTRzvM8TNto25MaEccooDwe4Ut3m86PdyNBrqr42cJn2qyfmBCSZYnUP94o1kaLmJgEwv3z",
  "key2": "3r2K4t4STXGwWpZT6GdEG7BvYRyvtvizKSyVosb5X4ouc2C7kP7EgNW9on33FUQwvK6xiQaiHwE8hqAefWqfyeup",
  "key3": "W3gUjN7EWpSYKKZJH3kRUcHp4As992dm2RjGGcSfNFMxXQ5oiexJonLPtvpHHbfEAST8Pv2A3YBPpNZvH7gkWXs",
  "key4": "51i7pY1FhfhqkNepMcsRrYSv4tVWMKeNmeR3pE8dgQYVSp6LNSx7LsN4iNgpAka9dbfYbfJx673aXbSPUEufkL2Y",
  "key5": "4aykNJSExX3vqREuFHcwBaSjXUC9Lt8tRjSf2n19PBer1jeHLvQ1Q8GumJeCXoCGubXny9LssKTjZSHhKLA65FCu",
  "key6": "6z2Xoesp2Ns4AbcHQmN86hM3DQ2Bc5y4edLZX6mKo9BXK81dtW7UiADBnChr63xemTKUSiW7VhwsbwgKyLJaE8U",
  "key7": "Q9WjMdvNHXZgnt9Mqsp16dp95uRqdrWkcwxRSQHLeL9ZqmF7iNWkm3JhtuDGVwMeUmj81mWwFLFTWk79Fx73UYJ",
  "key8": "3nkbZEMFCqqdhXXh32oBx92QojEq5aBvX6yFikV6frV2YQzrFekwv3UfBoKzH4GuZJbNWzqsnZ8gK82exg6wSVuY",
  "key9": "27eLDGAdtPfGCnnBEnMoTGeXp24zsPrzmUpVS5SumBkLpbF6pBDzooNsdHTTELiFkXeCQhQamcjM3Bo3xyFPhg5m",
  "key10": "28CrRjPo8iVfrkzSLQYRxB57iTnaaishLUqDjxVjafUpBNrri3dJoFt6uyWFPy6itwhkf9feVgWMEYgyQa147QjB",
  "key11": "4iJJ51BRuSEUmSLfDz6h31qb6BY7uTnjEeHNzZqyYNdWZwmQAyZ4dhSkG6km6AzVsprvvrKpsArKLVHkLiEtiSuR",
  "key12": "4KGyB1tZt5bExVTHohAE9s19aTWeVHswECcJ1qLLWkskgXMs5QUfNFaa8Doq2srSZ6C3nKSU7Su6a3EbGL8nDPHm",
  "key13": "3jutxW7oxUtG3KuhFvRt9zxHdTrD4Ci9c87D58upuu2paWA7NCnzBvKoXV2nv71n51jkwQSwB8p1xDjt4jtHKd2p",
  "key14": "3BKnE7MoJetXHiBkjuHQUu9WrFKBpAT2iwehAVX52yYY3nqBUPZS3oHXbRbkoSzmqhiHnkwf7KA1voDboFNYMs4N",
  "key15": "e2YuguMhnh21m1y7Vp6oJAhnVJLjipC8yPKd5DpkpHe4Me7Z2Lc8UNSRh9FWouk9w4oJWNhvubtWNwXoYM6iEz5",
  "key16": "4GBGZFg1teJNEtNgpnvnLo6T7w87P52QNcQG3ptaKVEeb64TXWzqHsx1D12WC1tvsiyXLmHY59yvQtAbzfWkYfGa",
  "key17": "2Tr4GEANp3e24jsnjA9nPUD4KTdNyrrJWSJtR2afbmJAj6gJq4JCXJ1u8auN3sGdXWyMF1DWn1Gj9UnziNAM9x1H",
  "key18": "3cTvhoPYjmT9YMccbU7GDvZaLRvJn9qSuewhaJ2jqrMP9gSYmzYvEysjFnQiB68BBRtPrS16utakyXyfzjMXZbBW",
  "key19": "2A3QSHtcoBBmcSEfXcj8ybFLYofRg9RN2tJmJVHnswUBDy376VR9UYGt235NZZ8umSQUjdrVQ7Jkja7F4ibzf7sS",
  "key20": "2ZJg4GhmagNoxnp4v86xAPn63wuqJs1TbqsmRtgb9Wx7saCY24LmBFLcDBbu986a86qhuXAfksJsTS4MKUQyVTnM",
  "key21": "4W5TbZarkcyGKdHCnNujKNK1bPjbFNuGts6ftXdtDJwcDFWrAkVk5sCoGQk4yLsxSKj6K6jeLSUTy4AxXEZwssqi",
  "key22": "5MnvWFw3733tA1dRrAwW3pz2Ed5GW3qgevbFNsQKght3nnmxDAad7PsksJ5raaCCmmqFT3zMBrUc29AAXpdesGAi",
  "key23": "2tu3Toij1gN7gxbbAjqLm1wtJKM7iLep1Tt9cUfQTczA32yfmwr7gQh73YYEnEfKARzPBubtpQHgvDxxDuzLZ3Gf",
  "key24": "5CQ6YWf3suqbAPR1FNRcpp6WQJh7JNez3ynw3EUT4sb2J3nEB5Mqf4EvMJSWteiwGwoxMxw9TaG8vUUy7yPcfrkM"
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
