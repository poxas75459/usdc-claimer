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
    "KRvSK6F7RARuSAaPucCJ7mHp9WTGTDvtC38XWETNCPAS2K43vShc32W84imGBV5h2bmFw7345zMeg2DLdufsAQu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fVhR6KDDQR3jzdDQLyiAZW2U8vGQPBfiFTjGZnud4RxUmbnLcdJ38c55sm5mqL9DzHwqGsRvBpyxEo1Us8CjeHS",
  "key1": "3p691oy5Dp4DKw2DyXGUpwn57xFWdBpeVqrvWmRm1g7QWYJ5gAcLAeNMBBkWiGrbXWhezdZankw9iKuPLe3JGMPc",
  "key2": "54TseUaXo6zx6MikEL6ybs2q32b9k9CEbaz8RUpyw6XmfdTSKn8Rn7R4L2N61u7REKxw3NdbfDZ43epNuMFTwSGk",
  "key3": "4WRjf6E9eaZUDpQa573KHqGVqhYrSD43HfB9text7AdcCHwkWMWMWbg8PgSDJA4PVn8wt3zNLsPfwJU8dYgcxnYa",
  "key4": "2xMYe58Bom9c6RysYsz3u55M7s7ijrZUKsZp45qo1MYBAXCTheN1vkTRRKZHfdo2bK96bEGFborTQoLuHSt5ZrrQ",
  "key5": "5ML6YgRu6TDovc3DCwQfonZudCvFathPLDcTjZZM8ZkMHkXiqpb97WZWS957nA4da5m84Xaa3Bn31wLSMuycMX4A",
  "key6": "2AzPTCyWrgUUuwdAYHZi4ySCLZnVdvKSpfixGN4YUZX9epAsbzM1ZVrT87KhZ3HpnWUtsXsp8dz8zBE4VQvpG66v",
  "key7": "42bh42GvgTSNxWHwihgsFFcBgPYG6n5i5PBKHSBGVkbSq7Xah6wrAErKrdFRicqLntxhTDchA2Rrw2ywRSEbpGyK",
  "key8": "4grM5WBQHHzoY2uqGv6JzLhifBQQoiw2HFo6MiBz5F42Z1SUQ9VMocZJJrcTDuWEwpu9Czz64Q11iPMhY6pzyFmn",
  "key9": "3ewLWHVniPQA5MupuaNwgEYSLMwHJ9LbjrAfbUX5HMPhTRX9T68wFF5mVFKobpaFpDhrrRJP48mjfKqEug9Dp4G2",
  "key10": "2pqhoqNsuLJM3kUV1QqSV2mTLrCGNMr1FPgYk4Nfdnifh4FJAZ9gSQFw6nuVkF7szcSK6nDb14b8N4LGRMGrMcVs",
  "key11": "4yiUqK2mQAoextBR6fZt5SHrektDfXdee2ZW8ejyjavh2AWzzzHMr7szKnhfVbh7Ve7cro6uUhg7uCHc7uNjQQHk",
  "key12": "5cuZ8mRiBTjDMbj8ex4phMHK8KH5xJAUaFPoD9bUjEKz4e7paNdd2WNEeDo8J4RUmKHRKD6uAqRM7mRRqV21tC2P",
  "key13": "5kqUtc65XEEBYEnvmmCs2FCWbHH5yEqQvUmw3GWbtChGG7PNEG89i1559k6ivfTPih7a8g2H8yuUFv8JXaZpMvYJ",
  "key14": "2dDzvC9fX5B9FoVEcWi3JQNuuLAwqkVP7GB8GCSbNYe6WneowHsf9cYcVm3tJrQawW1RS62kjoBkAcYnCz7vw5dg",
  "key15": "DDuLpUQFi4sUUqK7zerb2JY9X2NvgkSxbD2yVec2XiM2dBM7pZHiX8NmQaE57UuXnmY24Ghjj9jBRR5PTAQjuSq",
  "key16": "3mhQADXyxV6hYSLF4UFj8sdkXeg4YAt3S4AQRPHD37V9T8PghSE2CZ9kcmUDJQ9QPKkU1JGRq5CuePcwWFdVMgfs",
  "key17": "2M6MFtvMPtG9Vcbj3fZMhpjtV7yVsAUGxy3adyHjjwHGxfiDKJvQBiBWbKEwfiRyGsg9zhBGe9ZjUzjSX1pmLMUC",
  "key18": "3VKXBxUaeXfXRQNcdFsucccdzyTPE5Grir699garPg6sx1wsGbZPovaxg5w9EJd2ne4S7hdZM597focf5XEuTDNb",
  "key19": "3uU7ZJ4SYgxk1PcUQpD1dZbkyzmcDi7DiVU1wKJz2W7jrLRMat1H3A3qUWzHkxBxENJceoTKPQJsExzz38fmWG6f",
  "key20": "3QaN2UHCgYv4NJ7odmerRxqDB3UxQqfCxvbFGVBq6BLUtWP8sW2EbBXYL77JUu7m28YgBFQoivfp2qYHGedVccqr",
  "key21": "5WLJ4AmMiB7b4Q1tJ5XgFvwPWvsFEQYEabrvZRqxVKW36Y1ZeMAwSNCqqimX3aYiZJaDquxXuC4E2tmKmmzzSkaJ",
  "key22": "AdbmzbdmQPAu8DA5Uc1qgPR9vkf6bSMsT5RGk1SZKQ4q7BRL28ZHSTRLeHZG2h9aPAMDYffspdEazwZ4jwe9U4Y",
  "key23": "2Ut2v8gmVMJUzPAAFBZEavoUaUsjNZDjcdKcSnVmT8oE44t5N96qJyUVt12ETY77L8bUvtWXDTyrhyvR15Q9Ls8H",
  "key24": "2vCJyvMinMkUEcHFVNf737wKRvoEFdxkkKTwuB7gDwNG4ky3P6Afs1NkLZRtvosvSxp16MKVWPpCMWqX2qfT1vYg",
  "key25": "2yZA53yXPrLWyfmsDJSADTwPDKyseVVyexjVNaYyBUXEsMFXaUAvrWYk1e8enpFyVdfvVLirUZrgKSJekdz7VEqL",
  "key26": "3penSsri4uXKLE2gQJVJ8k9Zc3hF32spNGycUPvFHxjUhPffm7EuScDfdfkT6i4gXtQDW2SNyLJpui12fJHd6NZ1",
  "key27": "5tWrkiw2obMTn6JThuVmEAB6MMK66Jqv2QoDTmRebeuRRmrpiMHXw2DEqDSbbkWW1uXxGVCFmuWakqLMe6ZmPbK",
  "key28": "5hePSdwwPndPvnF9ddcXRLQWb5PPpkaiX5HgpQRgM7r8oRiknQjJkQrQivas8RjURiF8VNgZ8cpCnaYrXLVqTjPQ",
  "key29": "3DyEWKJYNkcJCimvJon117M2ndCXo2nTq7P8CFGLhMiVxeFVFmQTu5Ug8x7HEXbd7wJS5E5QvKFtJVGikfMo1YA8",
  "key30": "4mHQjE8snafj1QkbtTwQhdK6KscY2kFCLf87GTxLF3hGrzkexauH81M7CaAFLqWJVkBTFXmNzGPPDejqNVSZf4e2",
  "key31": "4DffBXgwCY5z2EBwDc3DjcSqaLXx3vq5CHPX8HmCnTEEFwohFzEVVdwqmtkSDMZrY3hVjfs4vKXthTPSZBUj2TbV",
  "key32": "3adtyqdhBCRJJ44ayEos8vs8oTs5zaQWuBtNHgNEujBUcHLHS7s5rnn9fmKjyesuWnGtTvWNn28Wx82tTYtf3rQD",
  "key33": "GcjpcLQNehCLEzsrtiNtg4kNFjgXEHYgdY7sahGhwmqeoTfH1EboYBcNTSbfy5ATjyWuoXkUYNVUhU7kkyoSC8c"
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
