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
    "2PpNFP1Kw5hueRvF9TztdnopCzmrxtur91KEob93ECEocypMZJgUsc3s42bEmkGtsuRYShyUUkPrmFM1SW1aGuiU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vi5eHwDPEk9zNPFxVZ6TPGe6s7UzfRRBngGTe3yv1SpQMZtWqcaiDgWFnQuYMEke8JWdwXaNxS3DQ25EovnHR8Y",
  "key1": "2DmWjY7ru6Yf9MQdhR9sQ7MTSam7uXfqR1JRmq3B6LecJwL377pyqWxQtsktxKU2s7yp8pUwT9NsVHidxyjCXrs2",
  "key2": "38M8SS8DUcKqhnwdBAZec2p5K1kMp4uKYJbHhLcVRGSsCSxVLLDERAX2QWeNi58tdoVx9r5vw3zUDYpYCVkcVWeD",
  "key3": "5KoYDh4hoBd7FjZ7TuqHmztt1GHmbTKPYsVnpuFL7hrRjyEuEjbJHfh4CJaeo9m4ypLF7ZnMvh1S6Mya8QFhthTp",
  "key4": "2Fb5d8XBZX5HYnHmc1sXHHcsEhd8pVYBEdYwxvVfdXYhQ2M6KyCKtJDoQiVPDiGYrrctAriDjQKpkCb6MER8LuFQ",
  "key5": "2e8VPgaJy37gDoSmG4m6E4ZA4nVZnZ6GLrZUs62dJ2inN18Swm9WyeoM9AhcLWYhS9Xbe1bYZinXSgCrM6NGQEf8",
  "key6": "3F5kFCb3K5RW9ZPuMDayRsWvcfQ7D5oLaWhZfx18oQmCSXRLcuuuWn4hAwa8B8zCcbfh64EMy2VwzcrREe4bQ3RU",
  "key7": "5JZxMWVCyVH8NRQJaFPo8V9pfimyBdPfbJ1Fk9wEFjkCm7SjR9zB2KVAtKqVo7xUcV6bc2DWRvLxVicB3CjoxeGi",
  "key8": "27urKtq3GZxFxRSukUUiV3AtDwanr96ijs4fFYzbDf2GiekL2nCV1NWGxAkoN29tHcTRKZUJsyENYkBHUE3YLf5V",
  "key9": "5Enf21xXi31RiV1eLkAbeXEHt174AJYrRXgG3hQWws1RmDkVGyJyZDCf9LGPETHVRmGZdkBNa9mJpE44Sruk77Fc",
  "key10": "5qhytSLPAwrRmiypyMwkkZCxVjZoeTUCW2qMEiNxnmrvS6SAaqUb99mHSfJEng6HgjRPrK7NQiLWcNozUDTU2caf",
  "key11": "ProiZWhp4BoUes885jaVtrxtbaWVCwGmG5SCWXZ3TssqfSc6FRqiLDwVJQ9pyYH43C26WpeSpaTaQ4cjUBxxq2K",
  "key12": "NN9GCDMtBqwvad7wiubphQ5NAsuEjhR5uR1HfnMWYhRrLZXtWZqgGTZmcWsLyAS9FaLAgXPLxLyTHozVVgTy8X6",
  "key13": "2TkkgJwUNFZMpA6Skn9E2i6T4aEHeH4U6xyC982i1TGnMftb2Vrdg9hgedBcUQMEwVyjmkuVtzC2waJBkDhD3Jcw",
  "key14": "5YpzyvBLGXYEXBzhYByjigNP9vU6ZmnLtefmDXoyYdERq9NA4cfUSEVDLMKU52YJXYWWA5Ux4CoF5NvR3n13WNtM",
  "key15": "5mpLj74QLcnnkLKaCM3FL2QDqurRx6mtTCBnDQcEd9LHfpHxhTvMVv8rgSJGJgb14dCGNetmPFFbhdP5cP6qMWZn",
  "key16": "4o5XKvYnQqU4jY7AvAKMe3LfA4TU5CrEaGwdiYy2D8LkiRw3KTEmv2gVvf44N1g2rAT6p57DXkh13dZSp9P6r57q",
  "key17": "sKoUaBNhCjaNBok1uRwjqUugx23jmWYGwWhAjoHb7tE9MSeVShoXUAo6mwtuGbxoBhTcSZpJcnSxEhwxpzAVFLV",
  "key18": "2SA9yCmT2eSBFY6ZThbNeaNZn6NK9g2CwvftFTawwX8AP5t5psHyXv7umKe6zGtCa8g7PYq7hzVPyndytpbNqu6D",
  "key19": "Jt1rePDRXCzGvpG6JH3AMnSD16civGqi5Wn7NZ3pwS2a4J43ymUeh25atKNKddzaDFWbhdk6Uuxa4J1jcPUnhL6",
  "key20": "5qYRM6abYxFsNeuk4VE4BLFCXav1oVF2vofcKJYDKivWx8hakS82ECQDThXRqGAzwu9BrJBcci3gsPMNQnkP1RWu",
  "key21": "4Sk3ePs9zd11WwLy1TCWjgja6YkY73XpHTmJiWKVtrC1Gnd5B9KLapbkJ8bBbC3VxfLQHksjTv2zRLMbKFLvjgB1",
  "key22": "67kkTmJHsHRhwhK2BAsdioqr7jbePnhaBav7isiRvxpnj4YAHB5xryHccu3mf6sE4PvsHhuKbo718VFKN6ns3o1p",
  "key23": "3vAWL14YkpNSzjBg36sR4xjyG9hBSaTs2c7ynotqtgB77URBvr3UPFhUZXntc9LDLg84wx48brCLkJrmK3et7GQv",
  "key24": "3GvdjyKxQLTwAmBgJYYg6sAk5qdvWFRbExdPuaGS9zxGJdYfBpufSq4swL8bqsHH1JgQTV1qz1VR3hqNqAQXGYbG",
  "key25": "5cFLzMax6jUhSg3u5pZMdk1FD29BAfZGdAoCUgKqMDhpZ93pqRmkS69zyPEJRL3BuZGicLciN1k97Q6a4UyKB3Bo",
  "key26": "648dGVBeHZD2Btx6u9KuT48QxBzQmV9q19GzRavaQbzzvrSPsZsMrzFQ53S9N4h4zMfsaFu1FYySaqbmDaWqDcKw",
  "key27": "3KwRG1wY3Ztznq2Evz13guKStpdPVNkitSGoaWdm3k1um7tPsErk1juKnNCZwZTTiLhMCo2XAesGY648mfxBWbqs",
  "key28": "5NeRr8byqK3B8oqHJA2WUSs8x3vFdqFXnnmtkRpQoUfsjoim9ugdXoXudemjCzDtrvTRteEiCdWtQvVzi3VYBtY",
  "key29": "rFrZexDnUM5WLoX133AFUg175qs5QPNez86JZMhxiW7N6UTrfUZ2SgZoC4Bdp4nk2hZNT8d3G1Hfjmb5TSrhpZs",
  "key30": "5fvAQgH2ow34vGfr5SBWXgNZtChFuK5Hr5XeVYzU1cDtNM1mtvpo7LM4ruMTm6HpSeib7fJfygcgpURcXKyAwFwZ",
  "key31": "r1Xvn4qwEeQBGPAjzNL9s2yvjWEabHn9JgM5ai6x28nFDxBaNn5Hs46wLtQVNQ6pn5thX28ertiq1ffYZx2JYch",
  "key32": "52gwLtGb3Pygjt7YmqNyR9dHdYMMT5CRH4Kysa7GZye5qWWVMKq5jSi4QNAbNr7NinyDyERYMNAzruhAGvwTxrcm",
  "key33": "4sRq9hqoLavWzjn36CtZrruy9gM6Wiav8ezQ9192fL9MZkYeK6q3TKtjMRqA5iLC4RecbePyDDsxn4tGYV7B3sjr",
  "key34": "58atBPbevDGm3rNXJssVq62UADGMYK5rmRbEXE4MMWUiKrCEYPArR6rih9AMiPjV8EiHuosvRbr31ejJ73wvYxM7",
  "key35": "WBAqGriX3x5JDpc2HWRDUcndb4DwmejNYYPqhR6BfwqoJcPoLbJUfHXrtpZEdK6iLZ4rm2gWpt572JGTF23pSJS",
  "key36": "2WekXvNaaERBpgFFkseAzzszsVPiKMqs8nfJSwK2g3CTr9yNyUJuFuiDGigyipPGKzYpCwnQmLWZcvXVjXWuAt55"
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
