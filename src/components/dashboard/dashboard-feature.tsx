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
    "38AYUsQH98bxm3mAHPSzgwSDS36pnAmyqiXbBsrMDfg8rRS5D8LY6iQiVpn7qbjnwA7JPgFKJAoJaL3ALs97Zpan"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25NkrS2ivHLuE5AwUnwEAA8Mq777cvMWyRY3VYDSXgnz9L3eLhm54kLP32bbijpQSGKiJYn2DEy3PVfDxn5ucuB5",
  "key1": "cGVujgS4Byq2SNqb3tcwXAcSGgvTzhTSZZjKHVHAicNxLAs7YfLrA7pG8VkCkfQCAALTEHfh7nx7apxaU85TxBz",
  "key2": "Wf1xvcJcBg6ohjCC8RTGsBWqUfPTHZC5R9PvkJuCe6Qif61cSb3MFuNEwaezTjGvrnRDsUG7Z25zgDR197UNLfr",
  "key3": "uQBmo1AxSb4ZZmhKWQ4fSPkr7U9XKW9jAAULF6KVncyT48d1ZS2wfG42QgG8jq317AWxjdhpfYirKpfhhq96cFD",
  "key4": "44XLZk87mRETW47bdASXd8zBh3hbJLgDrCGWpAtZeDA69Esdu2WzzFpVp5PqbxnEUmeVnNNWL2QJiwsTwj5jRYgY",
  "key5": "2RgL2Rr2FPM8Mz8d4irt13cT2BLrJUWWsdmAZTrjQZCxF6xFXwAPg8e1FoxGrwY348LhFArJnLzCVj7VA6XqHAab",
  "key6": "uYuLbXWmeEcrEyBxRPGLBohvkGNKiY8Y2m5RNJoxzmsjHCR68HvKxgDU9fJEux5SCKTgNUwKo162vqZxE3sCUut",
  "key7": "4m9CMginYCAmZBEqMhQiv4MzsfKuyBfBApvPkRkujvqERsvnKJb5riUizRtLkxC5k97GeShpA2X5GwB6eGYQbWio",
  "key8": "4uNPq7Aeuyz54N5hQx461Pn4QfJriKerx7CB8TcEC8qEbu21TmgFQmYJKgqnLHcyxL4sBa4BxDbY2qCkSmKQX7Y9",
  "key9": "3aDNMpC2zeAKcjFNR1bKQRLCiDiJrwZHz1nm1bKMNBReraqnEsnJoHGkJKxoq1jj68ov6ZQfpG6UvvJZh3jYAGFW",
  "key10": "2CeFQ87ju3avpeMVpiXEUPmro3Aga1qyseXYrVx5rgJ4wYsrUfeC3ekU8EKhnVtuid6iLo1AEQVV1BPyVNdpA6SJ",
  "key11": "2nmxMCwnq7DrP2SntmvMXysecnVPmQf5tmHuzr2R7TmqgjpH2xq4Hwaax9n4auJ6twQPDFenudrcUsEE5sUbtjn4",
  "key12": "3PZn66tWBEa8rMn3jixnoiTarNtnan1xYRYGnU8iX4j7pZn2KDrsiqrLVk6MaW6BrPq61xSLdY7b7gEeFkQT2975",
  "key13": "5zM83YHfhVVkTs7J3Cw1Aq3JGudLoAr9HoSrh6bSYJiqpjmLb9iD9xKaaHfqbaXw1yaHVpnn9kTMQpasSC616P8a",
  "key14": "3afTJpE2FqZSrPY378vrEdawG7kbsJpc5oSkrMAtTroEPLhd7ZBaE73NnG173zC9odmVc6RpzfbBG19Ga1LedCEY",
  "key15": "4Ai2YvetuEN2Dc3SZgP3gJtvsgprNN6ecWG7xDpuAEk8MhtyXq9RigpHVqyDA7974nbdnMoYz3ZuUYDayCDziYwc",
  "key16": "2hLHWp9zEEXderzGaRwoBGpqkeXvdUEz4uoWgWyTEUnDRx13yyYfRq1bLar7hkxF3aFzZWt26sTS2w3nAfUbUj96",
  "key17": "5PtpTV4ZVpXy9F3bc8ESwGN8YaXXYLW922SnumM9Uoia6CUEQisVdXC1ueZy3MMKuF4NWMUqjjtymhXF6Wk8sR9C",
  "key18": "5PMTFsxZ8hxxPCmtuTDm3Z2jzYkjLyY75bS9iag7eZxUpfsjGVNsqKwGgjVqVR3BH4pL6HcXLh8UPm48sxBFajFt",
  "key19": "5Y7giLdUeNcbkM6CMb5kXUPUyEbxWsaHoJvnNPVUJDK3WkoHtBYq7BU4vF9Nr2qa1suiB1vubqs4FURtNNqaGxua",
  "key20": "4SrDcoAaH7snTv5our6iJQ7KM8iceQiYzDRibyJEgVhf9kFXj19nJwszEJeQkqFhoGcYzvm1V4hcsARYFiPs9cRE",
  "key21": "7pegScBK8YDFsSG2EGjKRCBWaqKhWEbeJ2apeRQ2ce8eC3FAAzY7GzGKu3DzShob7unVZpew2rFTdtMayLPt7Bh",
  "key22": "iaw4hChQhjhosL6Jmdv4z2N6BH3TJ6iDVoRGdvZbzkWVQqaDNbwp8pckJzQEnmPUrUzZMz7Zsz66J3LeLzAtVS5",
  "key23": "2buzwNXdV75RSBGJGzWrgJoSAjN4AWhLD1Y9jTxESjVWXfcoYy3baAnTeuhLSdwr1FHFs8C7pmoNM2QrsrxpnEYG",
  "key24": "iC5ALj5pLtoVd9KVYWKFGw8oXZnuJ4JsT3NLVUH1PEjqoLovAmw1jbvkWu892fKWHdxPMuFjF2AV2nZhvgMNMaL",
  "key25": "5WtEUhAwuVvSGDvYhhTiaJm35TTFBswThwAoZkPeSaVNia7V7JYLPz2J4yJ75RGaL4WjbohmPagcPnQHLP78LHgN",
  "key26": "43UND389jFuLP2BDPcnvC84BVPGWEkTyhw9BoAcMj314wTsTC9vcVjZBHGt68TDVF8o6ahzUPDWh8x8WVsz1MZuC",
  "key27": "5rouN1K33w9yBbnSMfSMAJNwoKM3xgNnRoKU3VyZ9sWeyWVV52RHXXvX6deHR7T9qyrTnVynfgAtuPpuinpSwLWU",
  "key28": "3aapcNWYSurF35DAm7U2tbAtSBkNCGu5sQxjyXraYqMJc7vY3FRvurX8zrU4i9DcvDXZXapUijGi2t24o8ZcUQtC",
  "key29": "41fzzXc3z8FP5EwLjuDM6eLPEo3LK9GNg636fRYaeCNs26XZpCXyQvnbKnWGnVg8mVpxGNyc9mNHWLf7U6ab3iy4"
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
