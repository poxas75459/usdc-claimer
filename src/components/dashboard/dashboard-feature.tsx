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
    "4G9mYPQGASp7Tuq4tk9HV4vytJfCCVfBtPcT7KmMYsdYRpecJgpqNzeeUXRWpBLi3jjAQFwfHujshTmpE52Aqn6W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uBjudRCv9HzzuofBHzJxvYgiBic4a7EDPxqk2p7K3MGA2ig1o4Asm7RHzktrECbAEQnGS1Bb6yPg5sFCXJytgv1",
  "key1": "3sbcjtNKijxJVAcWkoP5kmh8KMMci5G2Fpd7Gv1MkiiBnwiS8ZEFM22ga6ncXyxp5TPwj4zJE7qEQjzP2dYkNFmV",
  "key2": "5n7EeQYmDGHK2uCFpT9LxjWMPAwMAeBzWhCQ2yFCKEJsKJ38osRdCbwtMjVXjVBBBFraxE9StgSCcH5csMW7HrmL",
  "key3": "4guURZjV78kZz78F4ZW57Yref8Kip7VMmWQBL633CziL82jHJrhuB4Ai8D3SVUC2ZvKt8Db5dnm6Q1WbD3Dbc5WN",
  "key4": "5KwEgeUv4pTrWR8JwzmnAD2vBJPTyz65YMVhTHmYu7Vp4ntH6thazqqjJaRWveygLQJJ4kbgKRQKitjE8Cdk1biR",
  "key5": "2ohbsFqK7hGAo49cEDw93KEkgaKnKpd7VJgaWX8BKdBoeLwsgSDkSUQWyecNhvKGnZb2DwzPoLGpntPbi1WyrpVN",
  "key6": "4yrWRoSjsNUTFT3x3ErUo3v7uhSmnYk88ZAKEGPS6tJ5AV8GoBL6bgawtQV11sMyFStCTH8WJCmGepo5uYsEwxo9",
  "key7": "2jBfzkjBP4t2L9SHesdY4zZyhF3fKABxZJHBTXCF4NCtfBeKQ884qUYRvJTtzUe5gywMVjYUDvRiy2WpzXK1sSMX",
  "key8": "27b7dB1LXBA19TXzdKrwVxH2eE4Wt89zSeGP25VcMSbnCvMdgfDnqemuVeZ9AbhHAqki9fhnxie8kCfHc1zuKoFP",
  "key9": "3wUvP7sRXm2TMiEmVFwmfTjkra28NAe5rGNjgjeyZBraQPECo1rxbEpMT1FjsjthgqbsawbB8diNfcSv4oDpNNCd",
  "key10": "53UuApHgfaMusBQYWhy2pAhwXWf2Kt3eN4968NSGQxRZihZh4n7VmEPLzjkhZaAUu7SAwGcTGTEL8omzBBFpyvp7",
  "key11": "29c7TTkyV4osRECzAuZK37dhXxUsajNtHpqDgc2yrWMrxA1DQ347WDAQ55zxVz43CEF11uqPuAN2YoEKB36JEBzD",
  "key12": "4b4B7ZPHqS4iYK66VGVpifDrzP3niyXtgZtUqoyFVoVgASHuJtHEUyT1KDP2cZSh7432QwtTvAdnLTVhMGSm3Bqv",
  "key13": "5PPLoE95KzNNF4w1ks2LZ2x1RBkjtRJoGupA2NivvX5zm4xZ9UPctEHMyRhz1eVTccqsi1H1FHsa29Cix3ZajM5e",
  "key14": "3JXg7ZwoAFd232U86AD6Bu6f1yTEei9pN8REqzph6kCHeTRQaRuJbYKRoDyEr4TSUHsBMHCmCxyN1RMDGdpCwqHx",
  "key15": "2n8yEmXEWqQC6UtEc4Tadak9fpeYpdUmu9nK8EtYR9E7faLKrqUoQNRAEPkokxTGWspg1cbJdoSAKYEbpEfB63S3",
  "key16": "5cWriCaKhjWNg89Wakca4kuimcDhvHQvFSuZaWvD8aHUzDeEdtLJoJd1gp95JwCKmz3zcqq4AwH7LfFupkY3cTvx",
  "key17": "64RpUhg7tiv1YdKs5LvwdjguRbkXTbmtRBjJroWEqYpH3z4XLqZDVEcnDqr9yt9vQyHKH1VyV9t92RKkdk6MeMxE",
  "key18": "4gEhe7a2JuMnuDmJ21UDPdjAka6efm59ZXy6c9NMFxjxNw4DbCKkw7kTvCp1QXYfob8UFA8F5MymZCo4ABzyB5tW",
  "key19": "2ymULY1kfaWTryPRwH5ZA7p7AKH1tBEa3EPeE5vJ6YXdNCxPFXntc73zm7RumHKhSgTvgw5WEEgwbmMvxDGafiqR",
  "key20": "3bBQbBk1ston2En2puDEJ6X9DqagvC7uLVBtNQMVHv8TuFaKbpHfN9aLu4Lxu2yzFWuBziBKcDCD9Qu7tDKFbyGA",
  "key21": "3gXhzk6krQzs7U8fKA1ZSd4rLMp6R3rXqp6TPZn3h8DT74gVzNcmcA8xSf3mbZx5iKzqRMRqHT8UW8VA37ievvH3",
  "key22": "4jSC8rBhTNCiYtXvELdCyo5MCHRiS5fa14naKiicZz9wFVTC4v7ZwLNLcxAyuQqGC9nkpkuVEx1nkTVP76nvGnfy",
  "key23": "4AMzBNZTBsn7grcsNjJEgf9NuU4VNiq99NyLJM2fY5bLEDr313eFm1JzzV7iaACnwQgnxgsQTyJFDcodm5vUQB6H",
  "key24": "J45855WgeCCHp4WgbT7CL3GN9mrAXwVKqiCiHjnNL1wHkpA5yCaeiJ2KfvsYdUZMEavzzumBhRs5wNudbBEctcn"
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
