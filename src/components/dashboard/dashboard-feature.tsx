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
    "295iVbHCkZnGbGa4AtZPK859En4AZW5wzCzx8TYHN3ZWoMny1NnkZQSZQ9BBisDTqZ36hzputQeypsV2KyBJTeZu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "492xmmDuyzp1TBooouYJstX3d66WEFYnPM9kR2CvKp7KLtTLBdwCKtT9uUg3ADgepVRoSmkbWKXrfCG3qiQzyFiN",
  "key1": "37LSZuhrSNigJzpMKveStvkPEpBqA86d3FiPzJyFdodU54rWSxwBLQv87u88bc7qEMu3nu3aQqQviT2rB2Ckw4kD",
  "key2": "3NkSXTjDmUnaw1wbMG5zoeWSMyYgGaJd3VSErB1z6sdLa7qqBcgZEiQH32rAHPB8cHPnyZYWwPPDwVe7njRLv1FP",
  "key3": "2cTKTXRg7v8P7n8bvGHNxSEsqwYacXig3UiLfYJmXHY4BFvhexNEriFiF88CW9XwRun8ucdd67SMHowyU2Yd2kt5",
  "key4": "5jSf9ug4YugA3ymcD1U5L7FauYCQiMafEVACoRWfYfEfTuQhnV2k6JFDfmQTQKj9eoTuwSwPu6Fa118FqUVcGtaC",
  "key5": "2jDEEdgqCsZujMFZfWj2eMMUB5CDkuvvx7cEvsRh25eBnBtb3okYYzJ4nskEpe6UpgQBjshpaRxkNbcQ5VYt5V5T",
  "key6": "2jyQDJa6oboHFhpTUDgcdT4MoT3xVJRRcsu1GezuD9wjaNJcRLdud7AEz3WCUVVgrquQBBTm2o692B5NKn9pXNyh",
  "key7": "2vL9gDE7hUqV3EqJAGDTu6cgzPpb7do1yGsCZtxC2TA9iXM49bNvs7FmtYyD68EjEENHePVkj72ADgZRocYeVpxk",
  "key8": "YB5Sh8sUBPAkX7jfEn1A53fhLTBi1YpXyX4RqzbTKLhgx9rkJj6HNDvbdEbYB23QdsyXmWr6vtKcSbLbQrqLiNV",
  "key9": "3JPEBCKBPQYASKaWhQcLjNLPwvpoLFHi3haudKrmq3VeXgxBoKTSQF4qKYpDttkXsbJGg17XxMZt2kdUzK9GHBBf",
  "key10": "AMJAPvtmWujK66ujt6gn8DMSV6PBWDxuNQEtmUycvDcrbZVws15B2etrZVm6HmWeNshPTHqnJxhXs8afieKG9Fz",
  "key11": "2ByCw5g84ttypXzXzgfmUU48pX46UrwS4NK6QpgN7EDLBqeUsMU6Es6UaBwuDotUik5K7FmDsvNyetmiS6Li57Gr",
  "key12": "5phoKKFcTz2BLd9KGNVZcgEJFi3uoLETAC3TLLJ7RgALfuWchHfAT8mQRYRsVjaN4LUfGMNV5obY9WNUBWkLR45m",
  "key13": "2pkz5ZtqK2fbtfCbZFUvGipiHuke3PRw4d4Hiv1C2f1keZ6bVi81PEMwECdk4agzQzu37x2xsyphpF9oKGSSTr6t",
  "key14": "4gx7Kyh458WTvsZ8yZ16AEPtsJigCXiZZq5isKPGAU1dNdaF1ieuyRqcDYASikP4rqt5rbz1dYj5KVbngPLbRs2z",
  "key15": "3xR52y3EVoVTSvCjAo7HRBWroCwiZ1W3VcyzxW8PZhbaVFjNmwUZLBqqPhyCJN7ufJfTDLXUzgtkEhvRdayuVC5S",
  "key16": "5XaUinnfcRQmBsYtukGBnEv3M2EnNh2MJVDH5X4GRbKY113qU5kjy8ySCuYTxQrYcYeNJDdvHud722HnKfEmuaAw",
  "key17": "4veQnuPhkCZpQpn82M4oskJwseBCYFbJUi2Fg4qse87T7jSY9Ftp2dkvHfWoRWH6TRNHNR2xkqdi3H6jH72b9KeW",
  "key18": "zd7vH1VJzRchTQgxBc8Tzj68byUjuxTAgLisjdpXe3eiWcX2CXNdG9MB5trBuQ6X6r9KqceAfs8sdhxfeMik1zu",
  "key19": "5VQ4NJveULWo6C8m5Xo25oB8ENeu3D4vax5Y2noqQ6yzQNvtLr7YTZ6vjGYTjFXhpnqpXWDsz9JzQLJ87EznfZzE",
  "key20": "k93pvn1Qzq8dxVLpTPDKKynYQSmLSPdjFBv8tMre3gZ1BZGnbx7EQWjc6mPinqg4YyK3gVeYbFStEQJV3iUZZBf",
  "key21": "3SLepBtKpjHc8uw8igsdEVYbrQDjeLnyTF6adsLdb1YmrjL7WpgxG5fjWXPEDv16U8bLjeEFMbycji8iNXAoHG5a",
  "key22": "2LFPKv9w6NegF6ZP6dZn8ySYMmpDdD3tW6yaqmKJS7fa8KuxwSAQN7Pz5f9TdRnymnzsFdDk8g1KWpSQgXb7UdDA",
  "key23": "yehg7HgVRxyQeTZMeGh2aXRWXt6RsuccpTYvg9iNpfMzZJX4krBCHubuPXUxq89fxTc91BYE61fXt3e5hv5rwx4",
  "key24": "GsUpGDvp51Qbfbp1RqjbyoqKiqFx354EfZDatasjpXHXCjqxHhbF44zPt2wLTTWkmmEuJEKt3W25LNeDcWzKx5b"
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
