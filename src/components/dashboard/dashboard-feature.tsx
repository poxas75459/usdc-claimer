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
    "4NCpqcuGrdRuf1EwfZC2S33jgZ7wskFE5NWqgotdNcuNUDqgcHUE1C4xS1o8baJXGnznwQHsG6oJkmto2ciTRcmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ysESc5R49YzBU7TyBEAgzGJvbB2RotJzBPgt7MKhrWoJur7bX2VmnDZjdLzqqZ4E5VgwYu8hCM5edWcrCYGUMPt",
  "key1": "7ZhPmSKMR1xY44yTrXghXTXJ1UKnakytqfLpC5syaiWrEwjUhyeAc3TJwJFWCZGpTfKHZnGSF8QKijdBdXw8uoQ",
  "key2": "wFPD9a33qmanSMvv4XbB74zcbpkQ3Qxy1htN27NwjD8AhQ7gHuTDEhYryi7zgkvy6Cpp8pPXEab9W5YmpcTWDtU",
  "key3": "2MeMUkLq43ohu6FcVdNKiKLyPYJt5orTtvmHzbANiYEe7ddaxAiPuj5KhSGn7K8pN1egxBWm3zAbvZBHJTiywRiL",
  "key4": "4HPntAMfbqP5g2YqXYa3o88Af5qi2xHFaacC69gR1fzN6zjCxa8ciDqN1hUqSmPuBhk6ZZJNpyqGRuEA9bjqVxrx",
  "key5": "24hB71zp1LHdwuPWPRTRVsGmFXfLcsKxdKzA4ycbTHTh7uajAGN3J6MW3ghFQ9ZF2hVQiP9MPErrjrVeWiE9mAjb",
  "key6": "59fW7u4FFgx6uP31zzBuR4j24QddaAHNbSWDZFpHR763Hg97fHakaBvF3DNNDwJVKGKuM8RBPxQfhP33nfAhfQQh",
  "key7": "3FM4v4UCz51pBuWo48SsUaLRD5Qo2N8fsELfQBLyURG1Voi797k5BgpXYJ4cMFr2h39aBMhXHphNarvKBAJGB4mS",
  "key8": "3A1i3dtV5UdPk3F7sZcc42wmZg76kFqGV3m41YwQuUfbpw7gcfhV7hNe9dgcrcWNWDfsg69MQwXZun5EDqPF1e2p",
  "key9": "4dHqitS1ZgF2ZBTZWi4tHkzXUiF2GrL9kX1unDPEHMU1bk8G2pzAfsVQrPEG64jaByW5X7bhG9t52Uod4MndyJuZ",
  "key10": "46BgVKv7czeywQ3uHcYouGe6TrKVCCV7oEgjczemL9ZmoPZZRfu2rHCDDC6fJYFncBZ1e6oQfBkrfZUKxdsMRkos",
  "key11": "3kpnw47B5pRof9EBMmRiLU4AhVHMbudHJ2SqV8N23nNbCnFksvcQx1HSgMmdmD3MG5kq377RZqJr4emMxG6bxmpA",
  "key12": "2Mi8Dm6VgaUUhtysCE5uzaSdDCoY72pHXUdgds7Cu9ktssYYrNjkktDuowyf8kWkJnscQPL97wi1ue1tmDaeaxZZ",
  "key13": "4RcV93aXQqGGVfbeS8eQ1n4gHmY3wUroyhCKCcxbE8JKBRYgAagM25rkD6FFr6Z6MZXxvXjdvx3PChVbWL8GJBhJ",
  "key14": "3XJyUtxn1ECR4ytqiAy8fciG1ueQUXF1u4JDCZHa5TxFU5s4cA9Unk9HtrBCMpkVfgmGW79ZsVfbDB2XRqedWKQg",
  "key15": "5LebUdihsNN5u9YWwYvFQQwJNwkGG3WfqE5pbT6HbojrU5NuDhFxnrAdiNRA2sdtJDiW8wCuyqeTJxwrJttBYrxW",
  "key16": "2vsFPuHEWDeFcBK45LZWMdt3hoViUhMGkdwh617ov8Wew6rz25zeiEmenqi6VeEQbt3zhari3XaE5xDZybShyjmU",
  "key17": "3spTosc3J7sykaGQ2Aa65JBfX5aX4rVspXxFNJve8dtnp4wQXv5yCBiy8MxrPHok96xU1j4EWduA5tvxk7NZX5rf",
  "key18": "4rkFSAvh51LFvozpU2JFTUpE1m3zhaUXAyXjJWaJKuBcZKyZuuCAGFdDnCZ3GfBpEskxoQJJDTaMrTfPUS8A2VaK",
  "key19": "exHVNWTVGJXxmiohLksi9TV2UTTRKrWuGEvRPYviNmvFs6qAiy2VRWMrPL3byfEzvzzfFwV8GWjBNXPmEX6P3q8",
  "key20": "xRKvf3fBc2ScmUzGGrfWZRonwbJjqQmSrAqfTHmUbW2SkUtadPXmikfRSzop1SYYtchWPRWctWWL6J1UqHcA83T",
  "key21": "2dcwdktf5mYNkmXS962zgbqh7tTUW99tCTQyR7LC6QQQ1VevSEkQNCL1LTi3BH6wpxpnV2wjSfD6qSxq6KWbQwvb",
  "key22": "4GmHX7da8hoQkFwuiPtn6kihsnRqeaS87c9o5gytM8fZzXWsSAGo46Q8fCa2XLniFm4vUz3EEYTVu34kghAET7Xb",
  "key23": "Wfpq9E9zefQ3x1UT1rLcMDHvpxZ8D3xTMZSBpY91tFdvsgrbagRFqAPxCh6f6hTGRwEeTmzq8CA6TExhkD7hX7M",
  "key24": "2ReXM76u6WGtvkGQdh6YPaXz2L2jjmVuMj83dDptjBANe6paHi8YF6Nnoobe2Wo9f9FaCp6RkvL27tyCbnBDZuuq",
  "key25": "5gWMpJE1Rj88ccLbdQ2TVA7Rq1iffSouSGZoRk5c5HUsq1DKxJauL1s5QhCaddaM95FARodfY9PodJB4E2Fbft6E",
  "key26": "35wv3shvESYjcQ5BvLkeuzCXVu9hb2VrdXbuw63fuAMtfBAtjWobgkKomCVZcxnyVHwLV4Zu9MxKhYfEWgzRnBbg",
  "key27": "5yonxD3KaQaLW3cL7nxZ7sMLPiiMDEo8nCcHAscAdn8zmngTJW7nGKM2PiozcfJPzE6Ta9NNyRi4gBP93mX93jGA",
  "key28": "39S7wqSAWhuZSeZHh3vnU2u8LYvD2vctnxr9DLc4J4MLaDz1e3ZYzuZ5FHoAngcF6LsEPfdxPSgAYpCzwqzUEFsC",
  "key29": "ewQLo9puwjmnsuwFhaq9vqxX1vrv22ibRdhWoxApBWTHz1LXafVkgRsHAy5p9nLLNDgLjCCLmL8KkfKWPUwnHhp",
  "key30": "4SyEshVdDfmdio1BdHYicg84FcYWtDpjqBxX2nPBrfJ8Uyq2jnvksEq5a1AjagEZhNReaVA122jPu89n666SA8iJ",
  "key31": "2ChcD6t4i4NckLX6ZCsZfnq8EjGXd5zHgHG2dJANEWQ9y8YPzQZEU2msSoyki3FRVf8ZchV4JW7aJGhtyC4e9ptq",
  "key32": "3wYXKcqqyX8FY6yY8PTBzChJAWqFtKwgKsnCHXAjbc6jcBZKBt5K8HS4HC5vJ3DDjz6WXzhNLXDiGFZJjEb4PBjt",
  "key33": "Tepj2atucrY8iCRQRbiwCHZkg6XSkTmpPZKjyP8QggpTsvqo2gTALs5RUmWkH7PFUjGvAzRdBDspjHEG8P2Phmo",
  "key34": "4a3geT8eZonQspjwCwg7G6Bu7DMpVEUNTMz59vE4vQagpfUhnAGg3J3YXSHbejWLGk1Up9nrC5XQAZ6Pz7i36mob",
  "key35": "2X9SvS3BVjJo822fT6eSy6gksgf3BDSAYzNGPNSYLQLtrx1Ce1rG51aiB5bozYpyvPixnPKpj7VrQeeAxzbZmQY1",
  "key36": "3RjXQg5LixDxyBPYUutLPrcDiP6AuCrAVqXfT8gybHoNjKY6XbcWP8gB4wFVt88yY4KLGPRrJ5wYnoKU3yL55Y4v",
  "key37": "5AzwgzQRSE3fUwqmkhg1jNo1aQdWyDYA3aZq781iA1djzm75MWSqMoqv95VDdqapihnPt2177zP7VKzLp1NpXG7z"
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
