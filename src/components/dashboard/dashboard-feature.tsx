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
    "3o3g5k4AAW4hxwkiDPdg9UMAy8wjyxTseJZYru6jebaqjj2GwovxfpZjMMrRExmD5xKuXziJMVqThktxwQTUy71S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bPRxJR4ACbVu2omcw4nYDYe42CHHf35RRqbHUTjZE7RWgu6GYTLj2VYTsjW2q2CQ9jNkbwYsz5T4NFjMYW6gVWW",
  "key1": "2eQRNaBatGDx99kkRmgBkEJNJaAYxsoohTQx9s31864YRY4fCoShoEj1KJfud5LWsmVt7RiYM8JbWZxLKEXq9i9Q",
  "key2": "LwXZe2s6ZbdjJN4ARt3sm16kpxepv11e8i29eWtePsduXnQPVeDpuf3qUag2SAz6ZH4cdts7dmMqSzd4ypuexrn",
  "key3": "31GCCQXH36pz9iB55Emgzk8fLaCPbgyU8Y2gzNyBKPXQisicXkhdHNBNfaQp76bQi3PqTksykNxTMsgkqxjQ6h5N",
  "key4": "2jTyPQ27iTPEKUXvttnhX7vVfN6aKpJuTG3ZrEWnthgvLJLTFCZkEneUdzbCT7TbQgcHGnkKhwey3DRMmEhBYcj6",
  "key5": "2ycj4fzhnaPx6NUhYEqs1tTtFWEvs2mnz2E8MW8X6egNxz19NCVy5vFivyowHMW1HkyZr4NivKLi3RupWecgW9F",
  "key6": "5WeTwJpQeB72ZQ1gwFnhsmJ7qYi9m31KxawrmSXbziSpFJ5zT7vo4j4tEhirmv68tyRYAMT1mnWHYPzF12CuJNpy",
  "key7": "2U7HgYs3fdwy2t5ZKYF3kjZtKwrA6q4cTgn9rnB8NawNBs46AWDGBjAd1ERp7L5xhyF4z32RLPP2DwEG7UkBnk4W",
  "key8": "3hUw3qpjrjvozE3RKm1aLUGwBCG9FU7BqjURvqZh9FiEAacLEynvny36x6PAXxyzFXdWEbXhNgbXiXk9rdJ9Tb2C",
  "key9": "4vekfoqdkCnRSPvLhkZoNPUP9rQsmZbPRF9nGv65YbEEpDZ67czVSQAjrrnLyJwPKjhUgLLdHa5UrmBiTcgNpaAE",
  "key10": "2RdMyHQrbbqiANe53exeJaGohHg23dGDSkm5vjPaU2FmMJuhY6tM1NojcEiom94rPLChoqPepZ3NXZqXXQR3tvAu",
  "key11": "2btPEmCrS64nLaWzZi8a6F9PTQR4A3aabKZHqtYGq4ia28tWkTLqYLBBgSzqCj21p91ngFAQeJssjNwzKDh54R2c",
  "key12": "38uvYX7RSxrNQn1UxspSmo8oJnXDCTZ1sSygfAs6ySFPstPEtvTnf8Ktn9KBUjikZ98x2q4edpb8Nytd6Nje8aHW",
  "key13": "4x53Ev2qFJEbj1YVEL5tgUDrHGyAFr82DaPZsh1BPeoDUZzMkGAXGupJetwRwjS7Q6LmmWwuaiM2XaucCh6q3bpx",
  "key14": "WTyXLAmbEHHib8Z9rP1g2Eg2qw8PPnvLTVZXXVrnBRFuvjKnKkLJqfT8PJYWoQTZk74WhEuXm5AcfnUnDqMShWW",
  "key15": "EWfKVAvkZwizampLqndpo3DJNpawNz5X5LTL22d7mnxkfPAqEErZFgiRWAGxasebrmDQaFY39znFZ4Q3BgHoZw5",
  "key16": "4g4Daxq33busURwt9LLD8FKjTsKBNMVd5rvu2An2opvW51wZL44U9HYsXfi4k33gjnjeLxZdHxdrFN63dWnJQEXC",
  "key17": "2dWfUEBYdovk7DUysk8CctpzPRtGi1KnkrPAfyES67jxLobSbDjRpMDF8HYG6obbj2uSGQceLuwLcedns6URQm5L",
  "key18": "3hgrQJ73xAABVU6XZQADWtAH7TUK8N5U5YYoHC9gubiHaXR4w7TpJP9ePgZS8VDZfRfJSwFgfmyZPMNdgiEEu4ay",
  "key19": "3wiyBC537ZjxpJb8rSfwVSHg9V52dDCD63DdcSb96UxXLe8WQMYxihTFg6jRFpDmkH1mxop4iEBVyoYFLaML65g3",
  "key20": "4N7xKqx8Hwn5vyjmwRtQ9eNF3KjybpBSuhERA3Gf7zvksnWK117STxGfPAPNd1gHmXZbjETFNX96uwADb2oYNxh3",
  "key21": "33RJnQMP7Vm9GEBWXmZHnDv7cFzfupKPonJuvo4TMVguX71ahAPQCCBrjxe9M6BXjw8VGsSFiGrhg731wAA25YUx",
  "key22": "4jfG1RdpRXfRmUFuRF3ASL3kFUnYpiEf2yXxRe8WpePKL6hi41H3SNYVKaomxHiZUPikcs5vPVMxiDAxLfFZ2osk",
  "key23": "5nSx2n4LYkxJeojxrk2eH1GadcUf3RZUJQdHQzbMjDVfhsKHpmB8EJpQURmvfwDWe3knVWY2xdvDBjfPV6zAaNWo",
  "key24": "523LPgYrnPAoj2zSWp16jxKL5CFGy8BQv2CjcuR481Mpcjw66Ypoq4H7gNg9jLx1KncKdCu1UBzt5nAArPEKyZEZ",
  "key25": "5YPjMZFAv7WCYmJkUph9834RYh4RsXPYtzgwBCbDDCwtLRUc1x3z9F4wttYqbe3ugWMjvBK2DRwWtVEV6jJfufY5",
  "key26": "YwSzEutdBAWM6x28D6Jg6tiF3DXKPe4TnX6QSAZa2867xYyWWX9wdFYyj7nzAeo2JiJRdFeg54TzFwhGbnRADMT",
  "key27": "2Fn1eHWtpF2FVta6431VH5VjLaUq7Go63SmjbX45oZUWmydk43K1SXtnm7gwbK8oh5UVdd9Jiaw2wTbGCstenYEo",
  "key28": "59GvGmLQoTiLHJtWTCYJcfrpicBNat8idtGd3dhcTkDxN7WNJTTBNEpktwRZB2ih4rr82mMXyADUCizT8b5XjKQj",
  "key29": "3BW74wQ4KsZosRNYoYTb78hjrN4gRKTmgp1spdiZWsqTVAbr4cRe4bY3UTyUFchVDUvaHwufBcHTtLk93Km7PhEd",
  "key30": "56tN96JbWPtsJyaYEZBH2JG7gUiozn9P1xpCbWeQTdiiAS2N4zAQBgUsEdN6ZkJYqfh2ZUtESDF586eMGUMSjF5s",
  "key31": "4zx4pwAPhwhdozPzYzvKZTztd6vEJNy9FFMK9yHf5Zo3e9qcscPUiEE8A9CNkFB6igPshTKQyW9XxbctMkDpRSys",
  "key32": "5X4o62unZENM5kWbNiGZhefY2HfLo6hCcxdEcuCy427NFXJsBFiCqWz8yoez6HrVB1zoVLm6pQPV9Pv6BjW9J98q",
  "key33": "2mnAshef4DX8U3g9cL8eiKX12Z4fiR5otRLhh7f1Qm1oTbJH7ipTtcXVPFgAXmvLeJFmdtbYbZtQfdopkpKjv8xc",
  "key34": "4WhMw5YAVqUnAKmm7c5nWafBqKrgcDv35EYhVB64poJvdV7LWtxBdNvArSi57pVUCGF9o8D9HHSZ1ag8HXtPwAAm",
  "key35": "46RRM7crVdcmae42mNyrxvAds9oDxANaPyuguqMZyzb2EE8h8XZxeFwXFbCJWkSFY1ty4pHhct1sdUKXttt5N6BF",
  "key36": "4UeCnFgwLpG73Gg8HNZSpNwpjrSGiXQzW8y3JHcaD2KYxWfETkAtwEWUeH98KynhSc2cjmJAN5EnoxofVwnD9jjG",
  "key37": "2EusVXngZBFY9kLs8WEYnK4yADs8HZhH1SrbZUc7tKLZvzxAHLuVpKrr1sss56dngpDAqaFcpttc4TqACYRpgmbk",
  "key38": "5Q4yCKZEoy3Hvwb4XK6AvSSnswrf8Lfv3HTbqhrX3p5aPhBGyQtmdKmaNnKjSBMkMSKfSEfAAWAqUAJvSmYCpw1W",
  "key39": "3RDY39t4kaVYfggGfhfmKTc74i3b1SMm4WCTJgP2Gw2W2XC2phi77tbZ2FuSCCpS8YeXM73g56AhYQ1SXVsDh2rR",
  "key40": "2HtefEsbYCEN6NNsB2LL4xxBxcY8Y8dcpn5HDa3wTaYZuZbBCWLThKtjR6uscv4EMCeEEm9rS4eUPenhT1pDRLpq",
  "key41": "cLDmfjiS7Ae6NXq1YcqW1xteu5f9DnFyT4GjGAJLqoPycSeqef5NphdFEjouTKs6A9PrEVA2k58vPUniYQKnPDQ",
  "key42": "3GKevKa1NGLcV6S7anftnUnTewUmXXzjX7FKwX9E7U8uxDCpg1Fbo4NYzuKfw6GAAbdScr962HwRBharPP1rVp72",
  "key43": "4FapXtZBFsyY5iWB6ADRYg8weQQLwunCwu8y6fiHQBKc6MKUknPdyWE8piF1Wzh1dD4VNyVAKE5e3ZtFG5xC17dG",
  "key44": "4m1cLMVgpVy1KC33btTpDRCtNpXgo4zVaDV8a4881EuqM6wi6pCRhS7PktXSMkGugMdLQL8frfg7zgk2PHSEz37F"
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
