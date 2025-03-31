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
    "2axVeAvCK6wTDrNuGpR95jJD9VPTYNMWt3JDqZySN3KVzrt1xMHUHqpEgotcgsLnqmiBuXQGucCec5FkdrBPtxWc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VBW3ApD4i5qMU3EnzVMz4FWXx4SBKkBpCzM1Ai2ei9y9SP1L9gGe7nZcy5fbdSD3r46xo32LZnB17Vkti51DSyD",
  "key1": "2hxtjQq9r9ZvmeU8YEgbPFcZp983cpx1hH79nVwLGc5ktg6N2uf2XKy65CxZ4ZdReLvRqvCSrXVoWPupgaR5KUJP",
  "key2": "38nSBtMb6yVbR2JcMFqer9KvRrK31qUqXUvHKDEos8vfGcLSYC6v44B4yt7HjAJ8topqbUofNCCSKHyGjVKZDXXj",
  "key3": "2aWyY4CDejgHvi1gaiFEQXKqwyUkGC69AHWXsrx3u7qMXaMQgSETEozQj9d9x3A53fgo1AUCvjYqQ8CRC4jdFGhR",
  "key4": "4FNUDGwZuuPgSaSSeMcqewe75v5qrtMqLCKjMtvw6jwCSCnpEUW1tePjfjbFmb1kh7Dz16mDdNYrgwMRUForSqHa",
  "key5": "3D6tpytA5U2FVDLyAnYr73ppFZPdgcyXuv2QMirfqcZxkC5jaSrBsrsyKueLZ5bcTiCdwzY48QRKzJVe938oJJFe",
  "key6": "5qBTdiguUuYN764iXY5jbp9TumgDkTnivo4sxAzfA6BYi7P2hgTs3BJDxvDgK7ZDM7jSiS741M1RTFC2z73SCLb8",
  "key7": "2xrhkk4D7FpKf9MNqgFJkUTBbSq5c5JXyE1LQwTmKCrvd2ehYQ8HNb2C7qwTmcFWFHsKUwRTGso6NqXNcfuvGdnW",
  "key8": "3utUou2z3sUy8dUK5NY7mRKg7G6zZpNCjXj94zogvXPQ8Ksb2XBokRagH4cNXRjBEvJ7x8QLdxM6S19QN1XqmCM3",
  "key9": "P9zVRt2YDM1WCyjbwG14nomg3eXboxcRViBRp2LMfkA6MyAkMSGS97HGAugtzjtHp43Ni7Xo39pAYV5frjZbE9a",
  "key10": "4STqarkh7jwaMYB9BBymQPTTN4DZn3mjgcmoeDff244ngMQfBKUcAZUtNX4VpVCGxCgwqzaR3hB235QXs4Vg1rdx",
  "key11": "2oKQQA3xvQdbU8rbz5Nmrscrw2koYtesRqDJDEauRaQGhZXKM2817ZntiMVjXax9QQzf52Sexq953WrBYQSqnZSr",
  "key12": "2Rv1MEDCekTmtEt9pNboz8miT9GBFfBAuGgb4UyR5uKerqWyWNEMQmdycFuy244GWuWSSGA18ay5SPzRguujAxEx",
  "key13": "4YidHa5dksx66T6SxSBjQ8VhmJitRksVjK9WscTozCBRfZg98GrdMKfuNS2iXKHrn1bCC5GLSBjdMVFeLmZT3QfE",
  "key14": "2Hrjhr3EyQYm84wBT1Qikm8XrX7TZr61NLyVyfdgZBWBWwb8cZkAvbL2SHQLYi2wsg3VqvfTCwriKphQrSVRMh9t",
  "key15": "5Yt7eZT7Sm1H92EEwVfUWxppNmxFsawAcHS8rVT5Yw7dPehcTd1fLToJu3snVozAKAA4kJ1AZbjZviDmW7kRFLV6",
  "key16": "54pqQRxNHJ2kTSG1ooU39QrdYSEz38e4xTo93PtAFTLe6tJ3NWkLUY67MohCPLJvRtDaBxcGjG8JRRukSRHUTBN6",
  "key17": "3oexk8C3HJg9d1rohVUVwNNmF6eAEmHHXYfiqJukdZYrWhWUEAMZ1kqqd6TUhuky7HeB38LD3EW4S6g3H7RiL9TK",
  "key18": "342wbe1oAWMcJSXShYZHywvGMywqyZQde5o4NcD1muMaBrfCRwmwJxgw4EJGHuqAuVzzKr6HbCG82SeaBdmytBjg",
  "key19": "diNBMjLYPd1j6wVbt9ZNcPvsVfwxw3USuakcb2oiTS1AqMDgsSWa6HsiDEHCYXoqm8FzApNcMK2DmFQKoX1NYiw",
  "key20": "4GtWWJxFpJVi1VQCSaPStVm1AchwwXWNNWk9XDqYcAsGsa9jSCgV3RgqN1St4NAPoYn1EBo5QF7uEbsJL6nXgVrh",
  "key21": "66sqW5uW3VFvDfynBFx2jFAEfG6oL3U1H2SnhKQTcp8Qy3McycePHKr7dUK6oxofXSSjSNiWyv9RfBnZLwg78pBa",
  "key22": "3qdfppNXUNYEKVopUhRhq6Kd3QsijdsW131P539x6kjDeTR4C9rRc1YyWNdosQuAWSbuw3WALMbThaLafAqhTR6D",
  "key23": "K9GfyqcnJv8SoFX9v7PwAXBwRtxLkacC5Ks56MZrpcbEyrpojKN5VFU2zcCg858Zx3YQwji4AcxAZP5ciAnreo8",
  "key24": "7vCGaZ1jfgWk2krJpAqmxHm79yPq1qCfU1MBdP2EAnxCCjT6DbKBbirBYW9t19DaUcJ8inFv1iAeXwc3cYbMeq6",
  "key25": "2fwXckXFt2PrJJWf4feZFo72CQD68gmndprgeNAcuvTQmprAxC2av1F2BN9QMwuPG3qMjNLZdNd3cMkXQPK3LYFP",
  "key26": "5s3yLKdSzQT7RgaUkCCMp9ZvRD5Rr3aTCKrhWPF7YcLW1AGPqoHpNpTRcYqP71eztCfy6G9tf7iqGx2UqxnfiBUA",
  "key27": "59KyR4SfUwfTt8xku47RHEb5zZcQ32X8Q8KTEtmd4QiM2HZByqqfAUknkiydpBLoc6zH6XK7faw2GFsaD3m4ZiWQ",
  "key28": "3opADDmASXWbNLEcvD9negjeAafSYeR4j3zea4VxZMV93risSdojqX38JTBXpbzf5CB7BkgbJrpS9FfDSu5KSn6h",
  "key29": "4whzZzCfsMCJJCAp9yj8rT3FjgYXpg2ABDWQENQEtMPQTa3QPu4iiVNDAvrJCZ5sLkKh2Apq6CXACnMURPob6cVf",
  "key30": "5cNpCT8KudeJJvFsxEk89NGmpBHTaAPPb87TBvPjwVWe5ss8MnnHzmgHFW3f1NN3on9pQhWRiwscGErNCSNCzW9E",
  "key31": "5MgxrUNhq3MaJRMZgk6Rgz2svn6Q83y3yQJgsxobxKyMr44FUon8m5sX3SnTrwtje23eogDE78XLYLijm21Sqqor",
  "key32": "4QLapZcHGct47EevWapEwxYsmCUXgh6UhHVK8C9ehbkb7yYzzs28XXgKxxpSWMdvmTruLV8oZPGQR9AnPz54WuZq"
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
