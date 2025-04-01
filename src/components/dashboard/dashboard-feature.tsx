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
    "32j39F1pNpCDMRMHCXDoMwBYYqe4R6JbWGXVd2bDJata1ZCgD1FCpuVc31GmfRc7cu5tYteqbXp5m5j6tD75KTFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XpKZ8CByfaQxHL72ZKSdL4J9S2shtYbXme6LnKsyaVburGgGGzJJNHh6AyS7kcAecmGYhuiZhBxRMRs7efwMtCJ",
  "key1": "2fuMfufVdks2awigkjR7qV6QQRPjiCMBf9Zk1yq3RmXdb1nbUGAAtfxroQLSEX5oDgFRBb9a7WZCsHUVnVVyfgdv",
  "key2": "4nWP9yxXx1cVqLz5pn2HcEuja65ub1RWEPnidnZcMzupeV4BEeGHazLHBfw5kiBNWRNBBb9dPmi1iWCYZ1aiU5Jb",
  "key3": "FjQnYodAzDkhtJRg3Z7eJ7UvM1aS8dM6dYuHLZW4a43GJXvHYFYvMhHGgfDN4q9urWExxRiGLcHEhmMPfo37xwL",
  "key4": "26LNssGQFBB5sprpoi12eYMERhvPBpoYXP3pBovJAkMrtEVLN4CGezLSXSHPRyXCfeQQG2Qdw1s3YfnZ1UGcdSJs",
  "key5": "5f9Rv5VRAkW8namB3hAa5g1Ag25rhwGcvY1DUyQaE9Jj2bB5Gg278nNKp6LGUQWt7ggrQCfxqpQHtvNsDGZL5khN",
  "key6": "6oVYMwWGwCsJcLCziHj1tx9sk7Gij4NgkuiWbjmvE5SFPDfAagamLNzqUy1eqnLo7bsqzmmYs1paW5dm5HvYsjx",
  "key7": "4PdzXicDaCKK4QN5NTK2GyfRYAN9ALMYShgTB9nEGNiWX3HhEkZpnSWDXeHzZQhZhKzY61GmmNn8hd42T7iVr94F",
  "key8": "ddHRA2Niy5VeUbeuGEA2G4jVvBYzeHCtyiWikpxXExpC2hgBqpakLT7vWPztVJob1uYx3nAP9PhG2XUvhF75nPk",
  "key9": "5nvLyRAH7AncuUSCdKHvRWCFacACdFEJkKe335epkPSFFHZKfiCBFx6h9ezrisKQFbJNuHNqEZCiYKNXKBSRdXq6",
  "key10": "2H1GY9BnxUoxGtMGA3epoLLkS9QhR51eihiUqzr2yDX6n77YLFuhKwVnzSF65uSSJGkwraQVZeUSa2PHTsm5dCZX",
  "key11": "S5AdD88D57LaMMAjxt2iL96duwQEmHv8qqgRkefa5acMaQxDPPQV3A7FwgAVG24wMhsojqLfU9X8L979JngZ35b",
  "key12": "5JPVDSRW5EiRwrvvrabS5HHQCP4kyNmX3rGVuKdMg62FCFh7Us8Wi9tvx8YmPptxqkUQ2hsfATQo1XdXSvFCUb4t",
  "key13": "5VrptVM5ehtRN412ZuopHpGNKPpgWzps4hg4V6fAsi5ehTSEKrMYHFUKxFdhtqAuk4LEX4ZHZwpsT2WvMiMLD45a",
  "key14": "4rfeKkWHaCCVrT12MmYC2zXTyNLoNJyRq8eMoVaAddGkvnL5NHK5Fru2y4eaYseGqJLJDKDBU6xC4ESsvGJy8pWD",
  "key15": "2oH2To3WcKFvh6XCLhfbygafDmx6tq6jfYrTtcHaNhwPZMLLKpJtvsxoi7DCPSD2hiYzNJgN2PzKf4nnp2GbwfoW",
  "key16": "vLT7f551D9ZidRdDGcWqWv18koGc3CNBi2dUq3QYK9ijkhbERURhAPEbcBEQAtcL86UkA5ZGcd882YZ4LeouwxV",
  "key17": "21yenCXVxbvx87JVYswhb1QKZehEeuWuCE6uu9A113VDbiPwJneVYhNti5gBTyRxxykL2pnaViUfi9phiwpYUzsv",
  "key18": "5CFpnCrjBzMjEG732V1UbErAgtefXCP3pyawnmc3asgVNKz25C2ReKHBWyRZMpo15EDMNroPFRN8yaFnqHMbsARZ",
  "key19": "TCPUeXhb8GTc6GPLh9EoMkekfKr8XeGXXQAwpmbBXu6sfkRi4RtL5JGvowreXoshYXx1ScKZF6fYHtTCgPxNro2",
  "key20": "3FG8ufLJRAsTdVtP8hc2opZpMZKX5izWHHdPXBjCJt6z6gGaWLmY9x9dFzjEsznemKGoroPdc7bYgnvGtuYx3TvB",
  "key21": "57DT5kTbcWpG2muy68FKMKdU7KeCsCAPj2Dkum9HPu1ySnjYHj8SFi91wWLFgzjaVLsPqQ9Hc7ETBUBLFEzb7NWP",
  "key22": "VUQhrbJQBjwDQ3ydTNVDvaCotAtufmwynhcz8xLH9f1bPrN9ntqEyDhaduoMGQCceRnkDtFqZCUp4ZxQ4fVJiQj",
  "key23": "3jB7gSwWGxiHxhitzmfvXogBJKd8aB6MqxEFxJaL4RaeVRXrXpUAgpeRBu81NNwmGrS9URPWCKzx3kkV5916iPZG",
  "key24": "5oPerhdukiNHQyCM38eZ22VNx8kyi8U89X2wRgUwrmUqDJqNEd6Mqsh78PYDABM2rCumiDQ9UCN1htCfar2moyQJ",
  "key25": "5tPn8S8EqRfpHeSoDex2pCP6Nb1funcX2obz94hTwYTBbbCbXq2GnHm7qRekzdFoZj7VMNLLSpCfhJeoWXZr9J84",
  "key26": "4dCyAbWbiUQBTLYesE2FaEov1KXg6oqKmpGRfm9ixQamM2yBy54Y4HD16Umgs1QigzAxoz3eyXn3GP83XQqUcvvJ",
  "key27": "4tP2pFSzpt88PvHaA8hBw3Pkj8DyP6uTxHiTT15niZcZDu3nkAsoFRwWpttufjXES19Hg68JwVv6Gzc6vxWJyKh4",
  "key28": "332FevangKoeogofXCwB8g3vScZNPR4XbtP8Y6Hpvx6n1foqtsUcjEnTN86e7bgT8CwzyWhqWsmhfqBCdYcS3MZu",
  "key29": "2copTFNzj5bWUQympNDQcc6SjWUTM1YcUMqoHdPr12UtAzMyPVQNM99uitaYUe8vgGDJ4BfYvprA8678dHFB7w7c"
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
