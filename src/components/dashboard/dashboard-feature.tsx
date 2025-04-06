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
    "pWm95EoYpXcqxehvs6qzRYm9PcjRrznCTtfosuCxNmXhKUHBi79NgbuEFZR9iHFrh5XWaF2H7C4Cm8TxMKv3mRk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "cDNpioTBv1Lc7a7yguGWrQCGGjbkrfPLDVVaC39gNysomtkqdc5unzhzzoU9abYiw5VVek2vD8wv5GbtZ9ypkzv",
  "key1": "24UG1hCUHT21y1CUY2sbQW9ZuiYktXRV4TXNzrkgQZgm4Kw19DZN7SxU15LfNFohdi4GJv4knFW4Keq2Qx7o2i4P",
  "key2": "4qcHaCQT3Wbc7nJMa2UdMpdXg4a5C1muzPWxSUaB2ZHsQQBEfyNML9G5sWwcYpfqWnswQEMXyBC85mRbg7RfB49C",
  "key3": "4u8zdQSCe4Advg5Z1LehKEeYQJWJaaUkEkPp3ULUzZTmNrM6zS3jpphEDeKkor9MeBNWLsGCDZa3PqqeZEnuoaDJ",
  "key4": "43TkHTkoxFc3JByYbAcMUTNzjy5yz5BRdEtpkwpjMm8jGLjyhhQ3xHB6CgcsYvy2poRc9YMJyP9NZdB5ftniddtX",
  "key5": "3mXEveWBMW2J1v3WMbQrcWB9ihEs9pnzZF536C8jfdYqn69oFBagupwd7xxgmbeWCGXrRCaNR18vdyH3Qvus1Foz",
  "key6": "hkPtLxauTiKQNVAX6dEnjdwuUkiGyj43sdYUSpAjvr9c4e2FkGTJLn4F9oiaxGhGf5G4qvYYMvSQutqqE6oZy8X",
  "key7": "3wVaRE4Y5wesCgGKVGuiFpxKnonvL8sod1P1TDXC5Pa9Db6bsYLbVt5wZbs9QyxkqKZNU7NcbCLsJx1aXQ7WiZuJ",
  "key8": "4sjAcUjdDLLdaH4T8Td2AizivA97zEsuANunS1THcAmNPed7Vt9wBSarZJGv1zEVpX6XLcZKALv7Sp8zHjrBGTwB",
  "key9": "22SSYDTdF6hpkTXpcNXwcy6Zf8D1oHVykAQ1iX882GGC5mguX4RVpD7VF5SC6jDjSKnYQQ1iBPzmfuckuGXc45qy",
  "key10": "2c4cRzMi9kq1NXdcDMrU5hzGes4UrRLs8i1Sw6BkcrdmsBhjEgNEKJGvAkWHCq7CUWpKzdZydvC7doSLGNcWK2dq",
  "key11": "5E5o3zQCr7VP3Y1oELGyTsm5H3NPqgya7SevpyjZYjUm8zUJZUirzKfzNp4afcqwLvSKRXqGSfrZiAG25Xbvxx8q",
  "key12": "5fLhgXb6W1Rjz6LJ9L8mQXif9EjBBsEvkcXKPCFzV5hCJ9GWYRNP7XF6BVB6XE7XsiuKGRkjedD6RLxa1iu2QBkT",
  "key13": "gQQRtCXT2XzoCdiK7gujZGvdxYnq83Toan7rL3x3ssHraWHEu1f6iSNVXh8YqfxN3xmNF9PrdocjGb7oJDaWWL8",
  "key14": "2BCrAVGX8c9yT1j6TPKc4YMWRT3PKT8udJsjsnR4QXA9gTA8CfWGg1cpqXuoMbvaZUXWBwDCWyjqJB2Hk3RM1DaJ",
  "key15": "3EEGAfKfuZtZJzydkvBq3yGxogLh6ZnWN2AWFG48YiYcegFQbXS1HLSFh8fJ9RrRbkXCEKUbTfrh7preDib5pDyn",
  "key16": "62H6PUTxt852yiCUXLdDjBJRv6XY8EpZywUU79SwUaL2YhJozLh6Bn6HhQpT54voxwxHN4h4iQAe9MMAFu6w2xnj",
  "key17": "5TXRdEAPPJKbXpYSQNVDSt2g2GfzxQUdaiJf1hNMuPNP2HwDpTPAJUawyQVLJPGxotRypwKvSGiRYUNHX5EcL8ez",
  "key18": "GoeP1qnhJz8fUNELGQCaMkQZX1XvRM6BPQ5jnkKiaMYohFBFSk9XQK67e75R6QWbDQpFXX4UYfbnw9BXGWEvR7x",
  "key19": "5c47vhr4GvnxfTBXqJ4sQME7R918ANQyu8BguABjBgBnkMTz69Z1sm8nqML92quNoBLKNpn6785BwcrNADjF55Fu",
  "key20": "2MTp4Zmjc36FuceyovZBNhMGt7ygGXkdGTgZb2jpkQHEaZ5EwtQ9JiQXKmZV78tv2YdqFdMitHEm4pjH7ZQB8c8i",
  "key21": "3fEtW7ivjP31iGn8zC1viGB5bw1ZAhqbFL25mwihxJYo3jrtMmdWsxymUPcrGqURgUZ9RmffVPCeGtbi9zsnXsnK",
  "key22": "FBA3Y3aUwSdiacENTFLrSQ27jRQZuaBcYAmhrxxr92QoXmAJRTg1dMU4k4819q4G7T2PtDmZx1SBeyX8c9izXa4",
  "key23": "ffDN84QR53w2Gy2FedWkvxE1ZWz27pfTSRKwdqriYcmDaHUSQcvZjpf1NcNhynLXNGCTwwJH2F4MiiaURU5ccNj",
  "key24": "41RnuMK6xYnZZhSJBGJUfDne6sDpdXiEcSZn42NBxR5G7Kf1iZgbJUaL4ZU63vdePLDS38TnnbsHsnKk6wCFvQhJ",
  "key25": "2Yf5Vb2gcC422zRm851YqiqMiW7esgUBpB9oYwF6kHGsevVkxi7GaAjoDBLLo2G574zqcP9DDSHS3khTf5QhqX5c",
  "key26": "66QThPbUzvbb8gninvU7oU8PWBdEUQ5f3no4nAXbSVAbhYDLyQfwFbZqEG3jqmRSYEucKfC9GS7ekWWRG5CNrPHF",
  "key27": "5Q5VeQzWYxBV3FdshnHMPfJKCKj7D97uDF8VNs8XP69hz5mQ7K6kvK2T7JZmsbFFDjZUF7JsPxYNrMrZ32sR63n6",
  "key28": "1dz91AmuA8hqHWQsogvfrcdB5AV1vJUGxepY5MfB249zKimEgeucowi2jsHmr1qTXgphNjXifKAuuhbXB9pt2KM",
  "key29": "3ghnKGaXhY6DBTD69dHqtAo5cTV17U6kHWCorxqqCsdZobZqhbLmAVcpkAk6ggWMS5ZGKN5syjsg99hFR28SjG85",
  "key30": "63RXzcs4ikhFqCE3xawsS69JoPBv44bLkPRy8psyw6DY4imj33BEDio6VZcKv7WpoMvWCnqYbQPWV2aNroQdKbA",
  "key31": "4aiTVQUnLxbpSmXxMGun2SSnDFd16HtN6Gr77gk9WPXQ8JoB7zZGoi8KhS64vsuNFbartMQNJNHdkU7W3UfaHDfW",
  "key32": "5cAwdNc3bDotP2eYtNA3ybFUkcicCkx4kpuX5oi6uKczoCXVK91E72Fx8ReKVWoVYFpVzHtMdNen8f8KMrRrd545",
  "key33": "4bJAMVG4xamTe2wgBgYghohjTEvqHtbGDxusMNq1ZoivY5m1HTXXF7hMxGedUS6A9ooYvCYNTVzLEznFGideJ9ft",
  "key34": "ufDU1RBX97kBXuNyE6gm86eeyi3g9UztFvmUpFc1TQ49GZji6kenEseVkQRNeb5jJf1wXUHuirUwiL14gwTzuRq",
  "key35": "53HZfy78oo635QM8nS46vrGUzGE6d3ew4RkiHBH3FSSZUzSrHosTmjA3HD7fr6amABxZmCitG4ayuxPyMk8UR6D6"
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
