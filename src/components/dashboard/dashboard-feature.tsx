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
    "3xtgowTdCXdNeBajx924hpyXNMMGqTrvsek7rb9Su2SkgfwXgxJvHA71qP415yPurdGxViBsjxig9ATh2zByCxvu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46LWqYBggbUUmmZrKdAEvndrmRA2GUy4NaREap1JXTzngrHajLdFYj6pSq7hmP1pBWYV7HAK1VuxKBZU2QTPKAWN",
  "key1": "3jB2cYhKJfLHgoGmeMnToJC1V5wCKHNdiijwG9ZrDwxckAdfWKDbmenVxBDNYSBoZLQtRMu5SFhvzKwepy3AJ7ft",
  "key2": "3proezxJtaxPmH6zZDVKThQRkyDbzVdExZ6MywN84BTuruti3UE8BfUzAkGhPNt6NLmEBXG3chazuj2t3b1QxXkD",
  "key3": "39n6SWcapWA8V3jHNR9SeaorU2EB9odbF1DBkj6AR5cknbMB4HGTKQFwMhyKeqjQ1Bg7xTGmZ2T6QhiggEHkzd5y",
  "key4": "3SAgwNUTzUyzHc8h616B77E74gq5XUWSnfE2up93sn1vxizzR4oAYtrYLucgg9NkiWgDaaTXpJMXKjHgq57vwTKr",
  "key5": "2SiWocMGkADjXTXCdKjHsdW52mQTFfeM2LWFpDfZQ3DMpr5GaUy8QEQWkn51L1oByqK3Mj2Fe61dJGaUvnDNACWR",
  "key6": "4FdLemf8NUNLN3YEABSeHLedCiRTmiQSUUpNjJnLvWZP1vkZZv2tMPfESiAHqo7WeS1f4appFZXSXi6HZ5Z2Da6q",
  "key7": "CosPcaeDT5jENSuUCJBPevLGTPE1EuLm9H9tBu9EPe2mMP9YcMywxJ94hSMnqHLfYgBjiRaH6pobyfJhiY5C1YN",
  "key8": "yTE9tUciUxoNgD1stAt94qjgqZjAQzXbAj2nPGxYiXz3xdD2SoXdiJeGFA9ZmwGQFphKZ2m9bnjRBH6aWsuBU7Q",
  "key9": "4iMovrq73XarfVZ9ksSkhGdgbm6eTYV9q7Nv5coL9ATvfKndeeLyTFtSU7D9jLgw3QD6HaPXZxPraEEMYj4GYaw5",
  "key10": "5k4EEBfGVwujWEyaJRh3wuxmge4PtrsSvxf8UB6iVEuEMRkRnkbxhQiywjAKhLwnhoP1evP2HZdXnjK7NJfoSzQU",
  "key11": "5cPgeq3YfNK5oj4iFx4mcHE79HvMkbcaVvnEUEnyU6XdBfxZ82F6Paybx4rAKdC7g1yCVPFpc44dmoyKFmkmPyxE",
  "key12": "55kxNkpZTBM3WZnmfmAcRvDhZwg8oknoVAsSBEdSvzqhhJaiGZzBC4RChdgYuEBRGjnB17se25EGDN9MgD6Tn2nv",
  "key13": "4vfXAf3t3ox58GBppfXfW9NvLMaTkKrXqCQ6K2DtHRdD1ZzMcJTcBij2NqFFgDEdFBFaSxJRWQgSxa4Hm9LhDAXp",
  "key14": "5HVxS2pdCvFmbuFB3E9uNrt4AumC77JBZkWtaRumvhUFUc28G53mBhDfQ6DR1cMwyH4AwMpGD823MKUZ1jMnunEH",
  "key15": "zcSECRFJWNXF6ySSyqeApgyVuZL2G55Jwba4hBTJC3EHPJ4k9k2ACotyVsVdFicRVRGuVHmVrkSvLNRy85oYHPd",
  "key16": "5HfM4F5egwKEMzRARTfkdELKBRcTvM9y7RNrPQsmSx3JnicUy7wwb7w5WchZ6dB2gkcD7fQMnhHdiF1bXwStRn3J",
  "key17": "2mMGXTFmZWXFrZUx3AdbcPNxtBp2CtZnv9iww3jQCiFWZJ4XfBnRvUUEwmZWaJn5Du5fD1kYDq33HsUkBYUVJYWQ",
  "key18": "3vVPPKyKdw7DLvqKhSdmJNXpsv8Hv2kP58JsA3s1pAs4ePGzjV3xTR3awRsPoWiWds2JyGMYdV52Xhw5T4nWKhQk",
  "key19": "67MRibNr8aj8n5h1EXKBztTi6Yj5WwU86RsueS48fWxNRNttHhAaLTii9gyqgvkXetWoaGb13j661z4gt8wawQoe",
  "key20": "GFfWjjci4XnLu3QC6yZa6gfx6hJEF6AGbumJKqNq3KTdUnC8dPakdMWuc7JgQKJqCrm9uA1Ao4bMtDXaXJbhvy5",
  "key21": "5aoRoSZ9uKukUqHtou1Qy4MGkVpPVceVbuqkAVF1JPwuk6Qknai1a97VGaM5V72VMDzqF1BsAhC7J68VmvC34gcJ",
  "key22": "2vpQTcS6evdN4iD6vuo31VQLdJXuB523a2ipEKWgKEcDj584DVUqSSrp4ubMJsCKquBGY6oZEFVk9mpmTdLtKC1u",
  "key23": "39RKySaLw4FC695b6xhrubcgdx2d1UfcGVsownyVRkFEbPQTk4bvKoVSQRhyrRy6K3gPzAXYoSbaD4M21GupY4K7",
  "key24": "5vKn18tiz1Ypr34KC2oG6J5THx32F2Bxp1nHU2C81wYiiBdSWdbyFS8PDqsd4shX4oggTk6gdTqutNgEUvp9L2zy",
  "key25": "5X28E36bydaHY7Lu97xQVGWnW6fdFNLNG8HyMXPBUzQeV3JLvw5e35mhmnccAw4iKh21oh1ZyVZ7eW51TphNS8Z3"
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
