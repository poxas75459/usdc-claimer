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
    "6MifWfUrTR3v9N7Wu7tx3SiBTxPrNQ2859AKNRBdg4f9kFJtZ5TfXBjNWiWPGCPv8aP9zrCBrivWooJmWcBKWRu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4P7JFGQZSZfGJaiWUt3AcTmWB7AHsf4JaiC8PyeGakp3K1JrQGqXzocGHSGJ5Fi8HgSaxzfHf8Zz6ZiPFHgzP9",
  "key1": "3xTzQXctw1QYQFRwxSQnuv1PhXY1WeEi2FuhTcdgV6Pq43AQZfZ6QTqaDSbwNzQT913dwPkkiufhFzTuuDKKWBTo",
  "key2": "2fgo77YDoZ3ALRWuMtsdAcMikP9GQu3kt93pQMDM3Kzty2HyL12NxH3GKAVTem2cM1eGXX1ZXbwMXGTgkapN1DGP",
  "key3": "5SmxZQs2ezE3mjrPbhG5nxtAH83DdssTHnxvgv2eZHp13jovMVcGD3RktYcTLRJjkp7wkb2WGz3UnmBet4TbvT8L",
  "key4": "5am4pFqujWGAGn1JBtkdFWT2SfyTCmM9Zb9gnHhZUPia7rCm4yikUajNNH6ciNGgeqYYTZT7NUdKX5SbFzUF4r2K",
  "key5": "tCbZKpkteBdFvuYhbWgaPfRLMzvd3qsm5iyogF44yk35s3jDLHCVjSRRVa8RMLWNq5QM6wF9hbQC6gex75ZcyNo",
  "key6": "63b3SVgMZXmXtARRQ11tuccuMet8vmtePsTyJoMyvRC6vamNvxoQdtGdH49xMNpkTJvKqL3iTjgXXN3EtuEqACAR",
  "key7": "3nAwCCuXKGX8iCkkRTxc1zsZZzkmQfKZoY7WxFxpmDFB1S6ty5ii19BeqHQrDY8wsv9iuyJnEkqaKf25gAwZLzef",
  "key8": "5XJg5tLkMGEVfN9b1ysAbCcAZ3VDxM3Ug7D6P526LmaQedaEK83kMavjtcrDoCGfe7RvDsXN1QKh87iw9mtJzPgD",
  "key9": "5zkvmNp8swLfDAmbjTuEVtJC2kUAbSmtA9TSpzZEtF4bz6oxXf87MGCs11W7MyvykhofZrnVWwt12yvNSa7uc4HE",
  "key10": "5DEMJAqDvz1spUQMLiKHLXDMDh6NHjNToZfsB4ocWbjgeAcDe9shmaMyroWPsoxjdxmgmwSB8xbuHd1HJRkCvJkf",
  "key11": "44KnkUdYoCW8YZr4rZULSBcyGJcKaj8aEh9eoYF6RJKjUJnoKWFkF9jyN8xhcDDK3cdf6ttJgWm7XuStZPce1wBv",
  "key12": "5JEebFpH6Qn492v46tZUsYhQ7afMvdYC6JzEhF8g8ndcKf9ifPr4GPVF9a4M3Qxg1U2rXghjuzk3VSL4jXmy8p47",
  "key13": "3VKeUuPFsS43USjmPtyMnF82j43UXFVe97QFjFV3idSnFn7WJ9oS8RWmQdLf7bzmg5g4BqSCvuqAZ9hubTCKvteY",
  "key14": "5RFCZ6gb78SP7oVSrFExoRi3X4w4REpq6PJiXwcFCnoYuamphnihwNLH6ug9UReYoySBHRgWgAXt68J2GrrqwstK",
  "key15": "4kRWiEQe2M5Eb4S7Robtjw5CpHvT1JiqsyqLN5h5N3AyQSQMJ4mdtfd5VrFFR5w2yrnzGc91GojP49ZC1Zvd23me",
  "key16": "4Ekmhq7HzoyW91umFHTVQEXWGJ26MjdDcmvZrFpzkmShnaDr2NkooAVSp9xYZwTUaoryEsknhtSw7ycPguD1QkbR",
  "key17": "2b5vUtwqUPCjgpSQBD99rfEJ6jizbnU5Gx5py6K8r3iMYZt3cNqmiDBceTbbDtmQW5hwqTRQG78nNKNpiuFKgMfx",
  "key18": "2D9g4G3eKYKwwrTQDTD1cDs4LbyRcrhpjKuHwTK9z9NFTASX4rKceFxbtVJea4avRgFZGf9A8LFpf6MXQLXpUobo",
  "key19": "3WjtfBXqurWuFkY57RB6iYyRpWVew7khLcyANmP3MmnGNy8YdWZGFgizKrpjj7zFudiiYjtRmaqSRkF5HVRXrJjD",
  "key20": "29ZGjDHHUjSb1Vpr5vghMZ1FXXKFpizJQypifdMxcpR2zaniYizCxGxbhp2QS7veYPYeoCfuEaoiBnFj9nsf56Jk",
  "key21": "KxuddTNjraXHyj3FxjSZ6jUzjWBwRQEw4PfJTphNvVhMm9q29DWmeScCq75ggfpCvaLoE5BNw34XPxXjugMjaN4",
  "key22": "5BTwc3ajAxqaxEXTyxpzc3KNUSqreGCTv149tF5hksbjv1mRpEFS3yVncGRRHpv1ag6cH1PPDBjYrwXQ4SUZ9PXH",
  "key23": "4QhvVPQDBQ1nhHLRAXmZhXG9XFNX5HeDbCwUaj7NfYZJYCnsUVxSA72UYyaNLmGYppMNNpKfxjDfTAzqoVX3Lax7",
  "key24": "3bE2jJLBqPhgoyvkLtt6KkpUGkh3iqKp7k72tTsTMTPJ2Ejsm4ABdUFvtsymudiLMee5fkEW2K4ibcufK6Kd5Ey9",
  "key25": "3y2AkhQ9fkqbrKetMJAL2YZ2ryWXLZn6bNz2KCJZ8z3BzQX8qANbXGjnvMfDcR4RQpRbsDGUJZJPzahfCLrcfZsA",
  "key26": "3uFGV9Gi4UkzuYrhx5wn3u3H6LVHmidbTyyXkSMoHmB5RdVtGjcrcopevqPGf4ZCKHP6pTne85AjgCFm5HNj9Wod",
  "key27": "4hy8CLdpnFWChqEjN5bZ6xFYFXtp2JHTTRZzZCvyxzzcFMmMXstYzDZW8PynAMjEEV2jQyetReb1Qu51GVfbGSNh",
  "key28": "3JccPRi9xtpk5rjuyYUg7aLuPVkhPJ8e3svgYKQhsrSDMXFSn39eDv8RgsBAikpeYDwURScNWM88DoSjA6zEkxhv",
  "key29": "2SbyCxERrQnoYUB7F1NRTLuvGVj49ckMmnVRhiMnvbnLD8qZ6HFyZG1Da8WHCiYJbgH2nR6mDsE6KUT22RNpE9jb",
  "key30": "2Ui8TP5LCE3cbCUtMLs8Lc8WZhDFiRuMEEifA88mwzv3uYsvYpjd2JspF1pcEAgdJqoinw4k79yRWS5KJgVSUMis",
  "key31": "3JcVzsqHXu1bwJD9QdjsGCVCiHMUeMAd9mJj3vwTXWpAVLLVrzXekGW4uSmkah5annMjjQgL4U4p6U96uLpZ9HcN",
  "key32": "5PEmonKSAqcscdAbdVqTyyAXBRi9xRfYNNMx8F3NiHxsNbeqfBthdRhDsfYnesuE2QFkNGVgFBLikhX1MyjJsGdp",
  "key33": "4wPVGKm7VvtgWewYZURUiGidNYaT9XWgLuo8aG8nbCaXnw82GQQPvq5L69P2sdcXWWwzUCXJsBVeq81qTi7SXwwt",
  "key34": "4B512V53qXL1StqF3Y7yQWWFAM7kHBrmagGnG3MPxkNLV9FGLthzLSB7y6pjGA7rZ3nMm8SqedoQXG4YkNxqGNJ8",
  "key35": "sguoLf6xc5kr6JrBPKVyNkPk8x9666EAC4xdazHpC6v8eQnD7nwEe93ErQf856gYptXCRAHdWWg3D8YUrQjuavQ",
  "key36": "gny3Ah7uSFijct9Up2aDqVLfg5dhEFPUufj3ntsy6xfumWezHrRnuKZdbwGpqPhEP2ECJ7o8phK5Y9nkze7EfEy",
  "key37": "48RU7LXFqVjDsv3qErcf4sNPcKBMy67XcLJ8JzDAX7pNrkiKtozLbqA71AtM7kkNiNnrw47zJaZDtBY5iXGwDJaq",
  "key38": "mUtf4tjNi2wAHJSsfiXURtuLrCdfBsUphJnFq8w2Sdgvkbn681tmNQ6pBQLMXMY3pDk19mKdTaEP3ARLLBDYiPZ",
  "key39": "5STSkRksGPpDPyaRGjSTFi3JUeqVwt7eCHjjSWciqSsnhnHtBBUsT5EzfoDGuW1FCTSADPghtT3HLRopGS2M1bgX",
  "key40": "5Wyrvaei5TuHSEHCXYwvkY3B56KtM7chogD27dw8b4n6b4v52sjeNUGmU6ojWugTSToKtzX6Rp79gtU98W6nEJEh",
  "key41": "44CPz8HNLnoRK6hkVpz6v596us3HFGRhagA2toPVQ6RvXHwr49Jegp1ADASbptCWgC1UD54iDQCtm3Q9T4L18nWb",
  "key42": "2ochUdGacbjHc2FpjYMZn2cUqfQrDEaZVXVMAXujHLjqvx1FtxWcE9b8Wp41veAiKvk3f2XKSfmR1NGYb4vGNW2k",
  "key43": "2NxtuSjjFEBRjLYvptX6dwu5VFNzP2rwLxndx94fqwyBTG3kENE1CBN7o64rBNPdhXGeWECYAtxRAc87k7kTNrrp",
  "key44": "Lo1HHB7ysSbdhvi6HQjBAYHdYejKJ8c3BihB2vkZAnSeMY6JxpDFjaWuhYaBEWW6hqY6VmCSM2BXD5N2G11prxq",
  "key45": "2FgrEaiAd58jDkeRc15CCpdp7aWwGoheVU5oQpP8BGXNsYAm41xKFK87ruUf8QVn3TVNkZ4bt7RkchMo5iUthwtQ"
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
