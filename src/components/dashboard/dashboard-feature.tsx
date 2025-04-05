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
    "2QZWJRcQx1XbjmwbNVZ8hZRAMj84JYh3zc7Wjtawqwtg95ZsPjHQYSHzsSRbwPuAraYG2GMRCEEzwBAnLx4ShKkx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4G92bAchBu3ZF1nT6PXvHqmGTvgn2HpDUxp6Ef96U8p8mNU4JvgJrauBpr8ZdHVq3EA1aVRE6Gr5WP3iTkoxs7Ez",
  "key1": "39aQX8bqtDXjKnJwytSLw2E6AUBRZArV4nbt6CJuRuAuiRFTPsctbtKcYbo4MRMFFLMpi2TKjRA7NDrvgnDYTx8m",
  "key2": "3aNGVp4XB9CzDXbJ5yezza6rpWCKUspQJ9RqDVuiyCjWvMhrQ9VR3gSHKHFenK1QnoK3hKRgK7PNAv2v68g8RYvH",
  "key3": "4iQkc8WYnQBtywHEFUBg3ZdSRPtUcW3QWFgyapwzd7sukYey8ZKvvscFTX9pXvqeSNiDgGUJjrgodcVKBAiB5Tb2",
  "key4": "5dgsSsEHHL7yLAdizdLVfLrhxSMoidNwSeJhthPthTfe4nbCVFFyrKQD4MHxGVhyEL17wkPW6x7XC2CjWyatV5cK",
  "key5": "JQuLmsCFrpP5vxo34rtbkrbTMjgT5wqa4DSePzKo7qBpr6ZwqCujRVHULrtrv4vgdFYEeARhmiUmgKGqpEhM9xc",
  "key6": "L6cpbZ98QyAfxEpUcMWECr135JY5wqpqe1o3kq4t7L9AeaH2S8ZwafsmG2qFut33K1D2WnC1w1dm4teW1bPmZhS",
  "key7": "mHD45zz1SZjsfoAUmrCAEK6SFdM6juYUqRw1oyhWMMrai8qYx6Z8ASH4E3dwoR3zi74DrXy8f9p6M549MfB9LuQ",
  "key8": "2V6u8RX8Ftgh3wBWDvdFLbTLnfbsgwdha5tdsx2jgH1BvqQKhEBY47YWDT2umQNpsANuMWiZAosLnCLMz8hHbRGE",
  "key9": "2MWt5Y4FJWJ9Z5TQ4ChSiYuZdkYvotXpmqWTabPXDysiWKKANLB2oVfmxv6NzhSWM2KwnGMjRv18VuEC7BfVYkf7",
  "key10": "3XieKS8pYDdfgdRUmCM8FdWkaQRuaz9qVZvZF8b4tersiXfLEbEs2KqcZCv7RiYmAM4teKd5NmpDmG4ozzSBu12y",
  "key11": "3wSu8XZFdz96GS8TyuQLqQXuWRd66ReXWDHgzYxkNWmsXphftLbA9tJgenMMT9tGEDWxNTRahBpMDVqALfgJCUwM",
  "key12": "4vCmTrwwgXvazyBc5WUNd9St5B2mM6SvMFq8GMeSizA5TBLmqwaSwr393LBX5M5oY9WXXdSwAnabvwNGBMtsTQwZ",
  "key13": "2tjDvPYQCm37Pqjf1J6ZYpn31bpiHkdxyKiHxZjo2X1JeJENWGW4f44HKNGv2E5eZ4PBDwzXb5xxgXXLLXCxmcyh",
  "key14": "5KPd3Z4PzgTSJ1xjtYuYhYrKbDHFPAsRQTT8jkVWXcNFf2ByMPm1AdQeKkLQqSa4E13gp8yEyQQscnbfvWP3qbzj",
  "key15": "Zf3jNTpeNCq1nPhcUhkXj2d145yQiG3etEr6e3je6C1c32YgvrtzGJjHsL7to7UMrvUoiW8qkD21XoX5Qtx3qht",
  "key16": "5wK3KgEfBPyrPWUMVmvYC4QgjCQ8j4HWhh4tSjZJirGetVpd1PNf1GbzfPtc9dZHmqgmLdBmwaxcmSqsghZheEXQ",
  "key17": "49eRb82g7jZhvcKmwj7YSPG1A7pXnfeV1mE43KM8byVxgFPDujWdpcoHtzKAsoBANSVdvLS5Uhv37aFjckte6saw",
  "key18": "4oKCESb1qhdBvYESb6XwuSaRomdWYVLTT7MzwhWDoL2XmtvMkSg5GiHTExVUkwayAiqtGhnbGpHcqZgKvTc3ygxb",
  "key19": "2HNxpcN7bzKYyQ4YmwyK59A13tA28JcZncYt8yuyUPWMLSGsLbKiTVCZM5b9CbHj2dHK4EhVZteJbdMYSSxGwZoM",
  "key20": "4bTUzoVKcg7UdgD84rB4hiotXGpCx2yUhw1Nu2BMq9oKzesH2pDpAag1du6xomJ4DJeKGJbJGuKHYwoMUdzznjG6",
  "key21": "MaE2rCbh8vjonYrgpHeP1AWYb33jXDawEJduDT2medXnDZPkDn3fPdsqkXGC1x8qCRUs6qjjbvNdqyrAkwyH4Be",
  "key22": "28SN6Sx8sMdBhpifKt2B6vAw9stCz1Mg5UFRAwCihMLaJQpmVHfseRMM21xqu1rRVQUDmtagqwSSNkPKA75BfGti",
  "key23": "394VXbATZtjBMPjvujE2rmCoFGuKfLLoW1iUjLKqbF2FYZXod872NXRsJhzhV7NJ9KP9VDJDvok59fQV2WZ8G4fc",
  "key24": "21YiZ8auvYsTeYEZHEbTgPgqHgrKujcZGUwTGTMQu7iPfoTPYXZ1bcXSvK2cDwfXPrhGQYQJ8cad54pL2SgLYGcT",
  "key25": "4dUP8t5YA1R4EAELnEpBEKUULDCWYyq6MP9cmxrT3SK7VFbwyQtDDqvMBnVQqrJPHFgNv4ug7gRD5DSPQUrp1Qtb"
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
