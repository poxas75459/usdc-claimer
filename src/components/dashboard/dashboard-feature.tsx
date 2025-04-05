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
    "2upyL4zJVkLKiDFoSPTjG68a9KxAj3Mzm7zY6Qe6Jhf4axyEQFp3ytaW2mMe84FGSsfNRpjkWEsrWjtpaF81yqhz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZFo9EzRxSHECGRZd4EaCWXweVCeQ8W2Qo3b8tM6JqU1Z5PnkGscogrHaNp1u8qho3EXSLVKrvS2L8casysyD85A",
  "key1": "62MuM3BzBuNdyhMLR7RCHDM9n8sEEzH8oqb9uJcZrDWduGFxzFnVPajQz1W4SSRCX6VHqB75Bgsdp65XuMjSCcMs",
  "key2": "3jJpoR2EXWpLwvAbwREJMkzMUoNgiH7HGw56rvW5NKazbDZmfKY95quE8j4jE5sLCnshRhR5bJoG2ppJTngDAT2H",
  "key3": "28C2VCjXpTyuMwBTTqxNy7P78P24kepvbTAKRTxiixQ9bH2ubxKxCCZqCqzSuBh69tY4tHXHgBdJmfctoisfckde",
  "key4": "5vnvbktaHp9TLugFDGeRggRBm45AmvaTnXbGdDZGNZcxD4XTSpX8qe6MqEdrv5DM3YToVfYjLpd28646Nxhn3SRe",
  "key5": "3gxYXtKzYmeZLVd3eyLiDjBAfBxARbEjVwmcDgo5Z4yHGgztvMbAoEVwTLbreQkqdNNdSaAs4osVJT9Zynxki6Ld",
  "key6": "nLRoXQDj48aTbwpKnHkFKTrrjazx3e91n1mVxmQHzY2uvdiqvyo7oYEfHNhJkTGjpCPfVmUpezo7kLjMSwsMZK8",
  "key7": "25Uu1XmfpYLSp7nW7XLDjASQuYpgAKaVJJKkkhpGEo7wiJPdJuG3ziLvoWTCSba7wRyUiwEsqrtnP5reAw8Wpmhd",
  "key8": "3xgSVZ3KhpsrWsvn8QSQB6cGJ5kL2f7LsouJbrKs1b9Hnk3uWdVLmsZmgnTZqm7PPzMEMkt53NwwDAwXmbb1REdQ",
  "key9": "Gyw6W6vwNbsyiiUhE8q1QXtdHwhG8B2efUKqyFP4mMSVvjVY5a3xBmnS1txU958NmGJF3nYjAypWyvv6DNVvQeZ",
  "key10": "5NEC15qNXK2FRd5oR7thRpG1ADpRRCmm7NH24U2CAUsdgC93Cx7Yzgua3KYmjDd5ayDFcQibgL64Q7WifsGow8Jg",
  "key11": "5oR71TUxDqhmQCjV9nmWeY1RF7Nf81C89zvGvpHuEs2Wb9VUuQQW1FCsDDNz6R9Fg2gefcHbh5td1cxF8MjH3mQE",
  "key12": "51rPTeMbHU89SeVimxwMjCStteMtF3URvrnnZXf3YQsfLXCEynPfNDzRNRe78XsMqGr917UQXmhy358k4QHQu2fj",
  "key13": "56MejTFNNZCN3d9Cdd5dCn7r5Hy6PZitVioP3Dk2Z2qfaN9EbB5qhm6c7bVCifVVPM611d3kah7e35bnxGH1ALFy",
  "key14": "5XXYenywEgYWYgdn65BYUatGRyva8GXFcAd2s6yWMdTCU6GCPTzGDpPJ7UA1RdrCiZprzN1e6hQqVpEV9YDbkhty",
  "key15": "UayYQo1obnfBKuukLwUbW45jTSc5q4PtUr5QpHK9Hk2hyH9YjPo3M68yMHdaPsaAMBZF1yofeHCuLgXRjkHUyVG",
  "key16": "24xhmAwaij6JACiyS1B9pquUVepdCJL14pefBfLJ4jhEBSxxVvuW3PvYUruCTpCugX7pkcmLJXYveBLwM77fkQHC",
  "key17": "3ErCZBeqXfETujnYFGmv9UqitNqcfPvmFpcUWPy3sp7GUYGH45Awrv2aJgHW6SaE5QvB1DipUJuJxKcgCpQ93cbn",
  "key18": "5zRm4RsGrFR2KnfjbHYLdLtPZuLmQ9KGKJWpvnYbZAJTxUvqkZCMKGpYJUkdXWyj3FWbd8Z5FQr3aiDaGEKwV1EP",
  "key19": "cD1h8yg4VQ91zT8LougLKbFqC1xuWvr3jgnQVYAbo5qjaCw9RQkqJbEgYpX1wfsZW9Dmm77uYMpD86uTSV4RGmu",
  "key20": "5aokEBRA7E922kpzygLTPo9xQt4mBAnnF93XXEF1RJKzWW2MyJ6oCycsF91SVkBDStcs9gdmaxpv9o87CG7vAfYC",
  "key21": "5cdAZLdkM4rK4ejwJG5EjUj7xyvuTwB2YNK6myvhZ71QsrbgE9gZTVLe5nZ86TVQNsGQS55Bfoh4cGHJHBHAJSuJ",
  "key22": "3zyZNkKDHtTCf93VLKqRrT4SKLA6k4rZ7GqEi3fRaEAjxppMsR82X83D1WJt4Cie4qWNhsEr1Fg8Ei7pjHDKPNza",
  "key23": "5gYKiogeaCts86dY2WH6qnW1CG4MWbfemwEe5o2XzXTnwkY5jVgb8SvpycFaLsAbbLKKH1TJGietdSUj9m4C2Avp",
  "key24": "4T42Z4saRduxDdrtiqJPAszyxJA5RZeAtLZzJVpd1QCDhDSFrtyPvDX8CC2h1oxavfgCcVSJRavsAhesGYDQ4QbF",
  "key25": "2X8GMRaUYK3Af199GxFX7rRtD9p78M8Rqbc33GmefATLSDxM3xAojhNBbEUncxdZXTXGX4pH9wGQ1ayeMux5A3mD",
  "key26": "2VUJdA8m7nRjs8qoEghrCmUbDXBx8zXHcT122jbcmvZpn5DuiY51mbSEuz7XH5tYe6NDz3KZ6TwVE2Kh6ckgCJ2p",
  "key27": "6wdPGHqk9r9TUPRswuw4iP38BfetZnAwsyy99wCzmTmNfSJ2JDrYw1E5CgX6D1Ug4efC3JWZpH7jMT38zFX3HzB",
  "key28": "5Xu5udyuhKi16cCANNXAVfS5oZL8Gk3fwBMwDJvBsFpRP5595JpYkYzntfAnVsYwv5Hk5UgzTrpZvR9tHzGRfTVd",
  "key29": "4Z7EZCHGWfkpvVvHrrKZyEacyuF42YdfwBjUCfsvyRvZKbBmA61ZZgmZWYdKhgRd1xRAs3BenhCj85aVA8G11ofA",
  "key30": "E6Dw1KqJc8m328NdmJKZUyn5iLzvjr9cytMBA1SYYoQh4akgSyoPXjkw1xK6SAVNCYZeYgRiSeKXoohQ6JntDFx",
  "key31": "3eDHHVGmHKdFAmtsoFwPGMBhxTjhxCoxjmc6JU4fJK9zaR2UuEZpLugaB1YDGRb9dtsqZV1JAA7KkaAA78YB3zwM",
  "key32": "2aQkeRzZz8JwkGKbLPvxQvVSNDpcxEZgSG1ufJ8PBhSq1VGnWckA4pkkFmL2cpeGVK4RnDgtr1qSCwkc9VK7UAtH",
  "key33": "3kKh61xqRXP1JXbNvPvWU4Z3Xa5LYf6pVysJgfeAAvFMP9dy6jMH72i493h9WArHL82eWcC2xEFGpaohuBAqRKQy",
  "key34": "3TvFdQJCE4dX4bpxYeCKpdFmheG6PmgJyMHyLFF3CyuKjt5Q4F5Em8AM7vhzS78Wuasa5bAwiwZH3LScA8cANZEX",
  "key35": "33y3Xfm9guzVEaJuS6wzCzhYPa42n9mCjpvfqBSPkz4KZCEmLaf4HusCF8YZyXjbzBvurVzTr9W18wp2v22rCcsK",
  "key36": "53Y4dPkSE1tNDhopcks4Nezn4GkMzTbL7tJEkTJHooCbWn7edQGe4keAxatwBf7cNyxarHo6E5k82iovFLrrZNeG",
  "key37": "3hhDXBVxKdVVT8Y6czTEj9wjhvf2FSEFKg3CTdmm2aGE96VHW3qkuHADYP6pFb7GShxiJJ2J1NnKJMcwDLu8csK1",
  "key38": "3mfaxpfBcKxgikRdkqvbkCHgQbTV6bE3noF5dU4BvHKDbVj66jq1ANfquceBWo6kVNw4o87vNKVAVqvJM3yrtcGi",
  "key39": "3TWFwgARBb1EqMzC8iQYkPRfa8ih4mubmucp9eaCf3y4cS12FbcMWgEswnEwRaQ7cFVkNNUrdh4w28J7uw4EYC3e"
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
