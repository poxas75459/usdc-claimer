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
    "ifxGLpNkNQFrjpf19P235M7TWxPbvrKkYBHC885L1GQwVSwzZFdRFpoNSFQsKQZPqEGZwcYRSBtDWtuVFeXBSX8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WUrrjn5ga6uT4FMD1sHJyzE2z93zp7fnq3RDWmqPcwaJRUnC3cwC4fPj6MgQfaZjy8yjSvrMma9Dhp9BxY9waUi",
  "key1": "5AUmVx1EvRCwK4g5iQR9g2VYAEf2sbafYcsgPLZg4e8dtioFXb6qBevSQdVCGJvj1pMDCahTfFm362dtgH9vwZaY",
  "key2": "3uEaDSpzATa4rMaLNaKemaWz5Zc8dwKDUodkE1QjSViLcrQK4MR1gxqawyLvmi3G7T6HmDH6CcGGz1Cyb8dJTx1f",
  "key3": "284gmdyo6M2t758BUBiEDSs24pTEJEWY9BS6KDVgtFZeZDuGkpjzNG2ufRXKhEDhf5QwbwJuVyDZjAoHDB6Gx4Am",
  "key4": "2zmWWqmoZS9h3gAQsCnYuTitb1yZaemA3LHK9fDRfTqjT6noZ363jRhBG9ndn57LM4bzsX9eanMJbG2TKuQfSV1T",
  "key5": "2xBk5hLcNTW99udKijGRBEo1ZicnitDgCKNAacWViemFAE4DA5qxD2f9D9GBAUkN4QFgCmmcZ6RRnStJj8puA9xU",
  "key6": "5hQNasWgz3Qq2kEJ7j1rGVPezNpitg5mwJHnNZiMUApWVR5bP42NN9fM2u4oZWfDLJUsadn9CfsmzRSJv66ppcHv",
  "key7": "3pNskDRdw3tJGAWKyJcmhkWwW1ieBc1HTtEpqMQjoqnWTfWP5VnMdhk67AGSobo9NJhzLv9MWgwZGrwCGxZzSzcD",
  "key8": "3mXZY8yo3J4qzYPMHhPhDvYZoxWGSuFUKRms6SgSU74JV5YzQy6Z9KLHggy4p2Ro1SKhj3xzomnAr1xgqkvDHrdm",
  "key9": "2esapuaccRVxzxs2qTu5c2NCEDFRE6UHQuPuG2fEQRj24SGy6QdXeGDo1zPpY4drMoJG5wCGopg3uzmRej4qTFKv",
  "key10": "4KdmFN1dW69K4xF6CK5nQxQDNdVyNST2GWdUi7wx9CvaMzVDhm2CzBS18cafW7cvD5z4gX9jK4juCdKh8BNBiWB2",
  "key11": "4H6irQv16r9EjX3sofnHUQgSUm1jLkEP218m42rkCcFPzTtz1eYwBAMFqjquoZxWqeUECWQ2NTTzBfvvVDU81T3H",
  "key12": "4f7D5VrgeDBp48ChRqz4EfNwHHDoUDM56QZQDax1TedKxVWxmDJGuF2Kmb2cKYDC5yNJLoHup2Wx1Z8mLebXfEmk",
  "key13": "W2GtQr32T5zZVYegJvQ5kzS5QK1imiA1DarW4wXCEdaaB3n9LM9spSGQo3KRUWVmHbamBZ8vNFZEzuGrhV8eUc1",
  "key14": "qYQidZzEY4ngBE3MfiUBV2vkm1nBNmJkNgyH53wZ7w2bDfXqjoPWkHNbpaiwc9J1ovnmXG6bD5aQLrQHch6D3DL",
  "key15": "5VhwgWkvCPJ27NooCB8dTBNvqV7FCiXQBkoco2mKmj3xbUgwJtzigNAAzvmjUs2LD9VcccEnmSK4b2bDczXEc8mt",
  "key16": "3aEvpiH4HY9521qftgDBhjpjEUjoEVZ8kCsZvtga6me5jWzUnT6enGXrNhRrv9Xx1ypDCnVpAndUqGqzwYAM5zL4",
  "key17": "3hKY4NFnFqRUZW2r44BHWeZ98bMFyAz3TN5J4J5MvRUKQGbUDTvEai7JVPrcjZDxxcJ5jtgGXBDD4MnYYw4Z82Ai",
  "key18": "5k4dFPkXRwRmGQkv1mGML8tMcZ6Bo1mssAbYYiRZ7Tu2FboBzixPeyTAtanHTuj5rzCipAqWy5MGaALCnFjviirq",
  "key19": "P5UuqTkN9jXqy7FsTBQF5JRoGcYwhG4bbYxZcotV4SYjQBAqM4nJb2DKAzdKs2EMDjQjRVuZWvbmcLv5ycMUR2b",
  "key20": "5BCeaDLy1TbYPxSMbmuXqKEA6Ue1VoZoAM5cfTw1nP3ssvcVUB8NR4enJNbxXt6CZgnMkH42oLuEEuVATqTS3rqx",
  "key21": "2GRcKU5F6JyGCfFr6ZjxGyGHoBLbfjtAbaxiQdU5BxL6aWowsbk1vxPD1vxqYMRZoVNYPKRDVwHSkFxrGCLRgEKw",
  "key22": "4bepaoPaBjRRpEBYqeM2TWErTZKnXK88x72aBFLXkwcpceQ2CKNLZapbMUAT7SridNePqxSJa3qSi1GYp6tpinwo",
  "key23": "5TSVDibW6Q9whWp3NTTzgdmbqvSbSxTFLCZXosiBomVNcLTK6vJBbJcJKhWcq71z1JEdpFxQdKE5kJdwawjhZvwu",
  "key24": "5XZPrdBC7ddd4d7eoHmaXpy2HCPxu7CMYAkWuLVYvL5ZWxxFmiFW3hAhYq3BczQoYjaepjCwp4nHoZW6msXfgnR1",
  "key25": "66tkuZ1xxLNRXfrTkPVWjwhRy6scXdkkZ4aLLxX1QowVJHu36a1AfuzmHAA8bP1Yqx3mMSUyURvDYFkgjdT1UodA",
  "key26": "65wbECGdLDpGUvDurs1vNxK5xsV1w9Dc4wEC41VVRASExKhMPcrAgnF1d5jaRkNBpi69Qp4a6zjHCyw85jGEEDgf",
  "key27": "zM5MueVE1yVYu36ExxNon51DWBDRDnd2983gdWkG4K5uPs8BFwhdqYuyVFqhk2WcFfGt7jXk8B4TmqCKrf4PABL",
  "key28": "3Ypu1ffzdLyM43JooCYVdbyZTKvcWc8JZqokHTb3pGzSa6yioqy6mUqSheYbbVMcMDWyn5xjmiR1vz2cw1TaEiuS",
  "key29": "2iCaFbLzvWCiuLxQEGXRpPQyz8hWd86ZkBJ1BSU6Nidba9CXcSMnifoga49JFuNqnWEcT4Z36tpqmVv42jeYdfim",
  "key30": "58MdNCYYiV1gQTxoU2DrEQAqzGM7d7RPpgbM1ka4szV9mQTaVJM1MpvP1ctU77a2DAQbbxB3DexW82iYtARgbWYE"
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
