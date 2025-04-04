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
    "4vCGCercDnXnRHDQb3VpvPiDJzwWzYyiy5eZcpa6JRCxadbA9S9CTJdQw2TWA1W9bB98xxZFY2dXkh8huJfkVTAA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dnANHtFseBM3nAbBPZcyi3mVYh8TgbMyPfTSdFciWfJY23k64mjQgwFffUUg1wVheZKTmrt9N6sgfwE2Hzutipf",
  "key1": "36jYRLhMMoj6iF2WgVLwLaQrDnBHgjWkYNw2GVdqe6JZi9v1EyH938JWypEgPLFN6ZHDKCnKETfGF15E4uWGPctB",
  "key2": "4ZDu57hpGWfQqdS5QHsH3itD3refzYGgh4QygrXeA9KCW6pzSBbCHMFqEKKr27BmnuL497E9JcTtqhnCm9j6mHRh",
  "key3": "Ju55XGrME8a7QQ3FxU13QqxfFHtsS2WRjD8r79u31yZuZnZJwUwUyDEYR25qn8Dkj9oxuvi1TZksMJasUQhC4op",
  "key4": "4dchKqDso9HXPFZM8mNdScnx5zjtE266KJ18FkQ7LfixG43UhVV5b1nMk3XxWH24gpX1FHLzmjA7bPYHVZzUWxVF",
  "key5": "ST9KBEJVK4HeZyUZpxgJvhnK5VdxNsxm9cE1De3x4ZRKGN3d6xD6zJGKQT5Gp9Nu9KBd7sXcMRfbJJe75RDzfwy",
  "key6": "Nwcoj17QhKBsvQniVwakLccrQQ9ESyTwBBRyqArMnUEd1eiR45qCs3sKRRUdxjeuK2mpBfCBaQZ1MPzySqa9ztv",
  "key7": "2RSRikxaaaxaJYfzdmfEaJNpRs8M9SoVRXhLc5yvjwRw97KoTgFq1fFyNmnMcWR3N6Dxq8jtcNZqp7ew5XwPv8mP",
  "key8": "bSwo4iHxnDGUzsgFU95Sr6PHAuekZ8HCa29KwZRodNUC5ngKErjmDvwyKFH66bEdBghD4NKH2xrZjwT5yrfo8Bk",
  "key9": "4JFh6rF8ePKp3EeStQY2xmLES2875G4WENbffK5vCiBdwWUHtb4Lf5xUcZ4vd2zEdWEcny2z17UfrTPXwhg9tUkX",
  "key10": "PQ4QWP9suGAqMsJe4Ey57h72KhC2P8EEzqW46QGJu5BuRo1SPcD54KkAurfTSAVVTNq6DePGvEvb9VmrYHNyVw8",
  "key11": "3PwcS6xy99qzUp51wzS68aV2vQDoMQzRUmpwaGg5SfaJH1GdRrHLiDq5rH3KcotjACX1jDQTpF1G2ppsarSyU26W",
  "key12": "3YMHotJXUGbx7K95DDXcaJTAtX15xiMshHYqMyXLt6MRCEQptwuXmbEKzekMdTRb27AqpeEk31nDisG4AGCVBfGc",
  "key13": "63oKCYPwSgq3M3hBDu1Fojk4egH6csK5gdd9hTSvSbrGhxgSSRS8PXDRxPAarPvqyVfMWtsdZ3AtY8oewnkcR5Vz",
  "key14": "2NBaVww5ME8cZAgzuxC3NzYfMLMfUwjVpUMrMCA1D5iwMmwgEHbftdyZs5ggPgjVMvWzCZMW7RvSCGQrPmfYdJQ8",
  "key15": "5YpvvE2BjjzGrKjbSfWxLd5Qpw6kR53Z7q4DXLv6hxdmRK4VKKLQoqnytyMUnx9MJvLcGUSFYjfDtieQ9ajd9t4t",
  "key16": "7GQBFMcukoR6qCpRgrU7izQTkuCZjST4oimYeUbC8P8vCYWTArDh5eUyYPNmMdWTNvRohW8xrNReLYZZG4w1rap",
  "key17": "2rV1QBcsVCfh1asVi83YCArx55Sf1qEC36DNS2bTYGEYvP5R2JYT3mcUmPptEgEH6VwP2AWMPNbKsUtoFY6w152R",
  "key18": "fNELFbEh4mLfZ4atkGjH9BmBcGnU9GkEEcC2SBcDpfVztZroqiJr1wXoK47Z3V1LnsVEf5omnNHuSZhM2dg6gcp",
  "key19": "4ZFFRi6j4gqv5t4AipmEHCHhpNcpNJtsejVqPwGR5pnf1EJMsCwR2LXSpeiuPjj5gCeKCfqQV8pzaKAQuyNGbQoQ",
  "key20": "2GYhtUeibnaiCFdYdUagAGf2oUh66PPsprbqWbhiJBEzVQZGAUT1REdDdqX8UtA89jpycbx59DT9HqbJnQCu5ejS",
  "key21": "36BatvL9SRqXNysCUUBneQTDQhtTx2ZDxAEar6AHwpa2SNfNnKHDC4BHGs26V8g9DoJitDEfuovyP3xiGaPjygSo",
  "key22": "2Lin28PmdL3kckxFt8tKa6oDDQ6bdPqztG36BvSVrFqqPjUa3zzmLYzexQ7K4UBCwpEH8KLnpLDWYbEoVG7qcP5w",
  "key23": "5sDYYubJDAFxYSh17EUhLvCFWrbPdVhSBw9MedkhSUrFzvUVu8dfF3syDTHBb5SXxJUkEP5rhxLNY9Bd3Y8W3Q9d",
  "key24": "5ymYvX61ySLYjCxLJ4iLRLdY75R8yUvc6S4aQQP3UqRcDYFsNU2B7mCjPAqcXA3EBDs589aeZtaXgpYQap4YxNkg",
  "key25": "5P4zETYtPKRQqRcemRTyN3rgUrQYuVHXHJEitPWURacTVUNEaL51itpMhCzrKYZsCEjCM8jCt5aXCy133q4R9dJs",
  "key26": "zBLcWtHTWFD6i19fkMjRgFbuuGE7BrLqDcS4rhFxZgrDgkEhER3yNEC88nt1xxMwnn3rUKv98f5H5nzP76nitU8",
  "key27": "529MgJD9KinjqZ75hkDyfboum4LPiecQhAgU9idVDjcfZYa4nHMNmLG4aLFKThJNC1SVXGR8zehT9sTugQQueGzz"
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
