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
    "3LyUmUqNo4PbmHTVYitEsaGFNPc2EEWjn5EeXjAvUkYgWp7RKvrzXAhM1Fg3eabvXCvytPg3sMjGshnaBxRVDR78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QWkcJMtMjTxHNE8JN8v66rTAFALt65e129Vi1hiuzJXFfBGJzs8Jc7UWP8apJUPfChAyAMxVEUNrNLWr6NqMtss",
  "key1": "529e6iiKnnjYJFtm4hMdjRyK1YCf1jDxTb198soaH6dVHYy3So3CjqxZVj64wW3mk2KaL8r47DU45V2YuwGmSNuJ",
  "key2": "3Anf22Dku3M3G1uGJdwmu5KKqcTS7TYQyMwDUPN2gLZHubuDRakztQ4Zjs9Zyix3LWTVRCysRsC65QB2EpyNJqJ9",
  "key3": "muUTtBQRfkPeHfLxoSpzCug9TnohWacGg45FhKiFBmNw4tcKsR3mhcMATUvVRLhd4buR9KV1xzwbMCRKJkR5qzG",
  "key4": "2hu8euRuJAt2tLTA8u6GCiJXq3kUL5k6TGRJ1egjZBw67gv7GtnsejPKmqgTuTqREaKKU6gEsR9AWjS7euUTXj68",
  "key5": "4kS2Nvh8AiSP494cWLDScN7Ur8URQx9471KkbJ8f9FEPEs54pfVE6kzY87v6MgCcLseRvygSzJ6PZm6w56sSR6Yb",
  "key6": "2tbSvpfwHsEGNvXHx2J1vq6DQHj3yuPGKEfH1HoTmQoY4xTaAtqebsNED5sbPK6bLFqLWvCpE7kGZsFpDmncBwwT",
  "key7": "4qUY3ZTuaQGqQ1PRahDiWNNJt11SZH1Hz55y2EgKNkiTsTJC6CBHi65E3Sirw5iLkyBgTFtFt5maePNo24ZGY1gr",
  "key8": "2CCbF1qJN789XLcoZnxhCTHxkfdvY6FXXBCwwAEYU4tocv4bbfpsDb4sBtZqWxswgmz9Fw6TgdgsUGDgi4Tu1Chr",
  "key9": "3qBNHYdRNXnmRcK64dKhX44qqpM1XUeRHaf7xK2esoS95aVZAQfNcqLUuJqsX11oeZUXkQdwHb11ERSads3qcFbq",
  "key10": "5qyhAsCs6wVyJyPo4kUcDh2cUgu1v5MiHMa147Q8tWbucDjV9ayzwXcopzaTcijiuLsr98V6FrShHYJypXUAYD4h",
  "key11": "27V7e5wnXBzKAfUKHQ5DsCX4WByAxcW93m4YHcfLJ9xxctMjj5zbQ78oHGYz6iKj1tn1kYfLEZHu4Kdt1zfvuQZt",
  "key12": "4ZQZKfedrarmp9MnZPfd7jJ7dC9HidQeaRBUxAzqUaRccnc1KYsEBJKJBTdj1gVGsnoohbP7LFMHRfYNwgg9A4wT",
  "key13": "5qVsXfvRiAXoDAsiYBztCkeQ3tkJyg1DB8MfD8GxPzTVNSKkURh4f7zW6cunWehnuusG4bD1seeGMijyJrqUnz6r",
  "key14": "3QwYGw7YKsbh6fXh7ACsUDsX5raJKzpayD9Qj2juzeV2xkc5ic8UDK27KDDkTknzyKr5mG4j2hVTgmnPX2v7F8ad",
  "key15": "3nT8fJsLhnmVt9jUSpDdrRdsov4vx9yopzxcPo4iGT7e48D68BigE4qzyisi1WZQjk8oJHs2iMpBhCQ5uCeWJkuB",
  "key16": "3HgmiWtHgN2zdP9d8Vkk71F8igV1xaKPQdyVe9coUoE2FVEfwRXsyE7wjaXnYE2PJfVXe4unxBQFv2QFouaqBoLF",
  "key17": "4DEiSXkBdgwGZsCEtrAzypt5BGBWBmMyu534D1BDSzjrWyQZBno8QdmXy1sTQ5VN3zjytUrHHwQimupwfXTyFLaq",
  "key18": "5djLpyeNQy8gWHHNZaiXR8CgbwUo5fDtw7zsQGVVEtj9xmFPwJpi7L9Xmo1WX6MT9BxytKpSQ9xehvqQGeDHwPBz",
  "key19": "2MvMcxn6bdnFS5cQr7HbFRGbFc5hyMWLS7oUrDJ4HwBFhekitYobH3FLSQ7hJUvEstnmKLh9jh6iBiN8UoKTZLs5",
  "key20": "2axgopa8vzV6pYds1BjhjmNtFw33eZ1W8potjMaX3tkNAGi4iWy3QkTj3451ytfoRukJYQQR8XCLUNq9U4G3CsmY",
  "key21": "58vyM5iLzk1rHD4vpJsrQeJdbJGYxq7W2JZVKmaXHnsergh6uq1dshc6GksD7dgA1J7ckAJzRnfGhC51ZZZJRCDp",
  "key22": "2NKQQheEKLveD9FdGaV5P6NQ6L8vRXBLo8uXitoK4M7D4iqD6tEZx9YgUpNt1K3Jp5h5wvusZbuox2P8cmSRtBgP",
  "key23": "5bBDeu7HqKKUpdKdAWwvqxdA7brYmuvv3HeP92fkdvMAcEg2GyPTzKnu6nH15hQYY27qmNjQmvjtgcXg5gwB3giJ",
  "key24": "2nshqryMiWgGGGX1RMXsLsDBBMXnGy2zqz4jpsbJszU6DDsyLwjW5rDc7vx2gbCPbzqcAmfbek155Q7KRnDVYewS",
  "key25": "3MfoeE6uPUYBsXJAxN5PYhE3fHETDcRReFzc64HX7YeBJaSaVVkrX6YkWWVdnauhbeBXCRJqG8nFJSHxWYTr7D3A",
  "key26": "jrn1gBbvfXh4GppfQLhUahmM1gcQrobkayPXaJnHCBDjvaCA2dGDchjE1zbreuJcdNx9v4qMGfVC4dDBydsmW5Y",
  "key27": "65WwMmBbHVpUAWje4xiMKLUWziYKCVZLH2EWZ5MNr2gNmHsupZ43UsMUQ3R6vWDwKxXDwGBj7PD2zfgTHu9HePBU",
  "key28": "3wESnVXv4JqwySTg6b6wEjk3UrVQoVgCdscrnDLrwZm4wEGmmGcVUEUdWsZnQxsnhwBwkUNoJh51jQHTjMmAcJb",
  "key29": "2XwAHHLpt17ZdBg3QGzedDJF4pquqBM9KnuQ32prt14zS4yvQVdxKqrdjh2pRRJSkGQmjeLSWxaZYYhurdNKeCL9",
  "key30": "Xz9AGgeMJb8gexnSzsejydioLbSPbWfPSNhkKvXVfdVcQe28ey12kU16ddDbTwAvALWMfgLkfKAE4PniiPt4nb6",
  "key31": "FN5E89jncnr9eCbg9no42ganpTu482zfAiiEoXkqnEAXeTkhGqLsHK4gBrNHAEDTE92nchj5TJNzx1MatGJHk1w",
  "key32": "4R1U7WDhs6nfZoanw9bhuRQyiemkp2Hwbvsefw3x8Xn6NX4t6KsxX9GeRswL21RC1cSuiMcWmQfzs1aSCuV7NkCP",
  "key33": "26ZpRcJZvohKZ2JUCWPro1yG1jdXrSTZK2WEiJCChRp59ikvxmYTAFdRYSSgLySqzYSoi545QKzYV94KfDc5j3ZY",
  "key34": "7hyajnBnQH46zzv61dFfDQrXLKvGBwhb8TDhtKURzHq2hwWpPp5JQLPENT2gmK47H4L7EnQ1EunDrHgWPAovGMX",
  "key35": "3fRmr4DpV3XEYTwLB4GPaagkB5EQSpahj14SVf2DvrFpvhNWCDNh9BK1i4HzjBBZF5TCqneb4xeh3mtRZQCuJ5cz",
  "key36": "4AEW8V1u4B4Y4EHofpRUzRe4PZYGDuaK82orzkQCiqiiumuf1ciAzop9cMZ9DnzeqFkhM8CFvAn9EJ6RgfuRr3Sh",
  "key37": "3ng6o2wKMFgpm84tuHWhg98Ev68mNscXWgtN7txT2tCoxzRUoLSnFLxu3eF9M3EFrM7mPJTpMc3TP4wNcinnkFaq",
  "key38": "31bZsqAdQ6JumeQ2Z8sYc1SLLMoC4Ud6uuJDujy9Hgxg8TsSdHCCcbR5hhpNwE4wojE3ZQD7kBYgGaUdjAmdyKnr",
  "key39": "646Z7rWrcNDn56Z4HqHDsc79igLo9dPVJrBu2CMzqhXtPgFgx5Y6vCmYbhtR8L7LgzUwy6y1c45mwhgEmULKFDTv",
  "key40": "4PDTGQwuuuiPDJcvdNVe91cxqZzBJcBci39d4eevVyUCQ6ALZY3qj18Zv67eBMvJPttV4E4VTJUKAQst9fTmkmVe",
  "key41": "2wjv31fnsR4UkGb9KQ73jqh2TkvEz1BfbfgefrbeDEY4gnbcr2yuqAN7Z8CcaSDqPrQQj5UAraPpWWCng577sXQo",
  "key42": "4QpT4a7ZHxUQbc3s6kbsUCbtd3pnqaTucs2DgE8sHNxiCa3UZfuPYjaw6qNh1Umm7SVsKiMV63K4fuNszwcC6ccX"
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
