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
    "388p7Soc1N3yG558fSaL1i5nPaQRpEgVgVZJLwMKHTR94VRwWsU57KtfnR6DtW3LLNWD6cLo4NV6g7hGAbvUpErD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NPeXTgjV69s8W8PK1B5SaiEREP337JLbrRT1HYP2QoeNowXw3ox1N7AZFx22G9T6n5snGAZiFMJYndUd15KmAd9",
  "key1": "4Lw15jMxCacHRZu3cSyebroZ5m2Ng6LuZCsVCwwyBYrqPfiAoocrm3zFBwTqNbBDueeya6XArwTNYULTYx1PsKvV",
  "key2": "BtmYPQN6mWhmiFqWtgp4xmhdSVCVMWQM5TDKag51EorSQqtaoTkhcbfw7S7PXdiVGMbrbcH2kpQtvduZipPYxwH",
  "key3": "3ZDKGhLr4SpRPyqdWtd4CDe8kKEVkCGjbYwZvTNAnffBiRDgoEpsAjV3aATJ6Mm4NXBTdAtBg7AkAGm94u8ZUVnm",
  "key4": "3RiZZDHL8KmctoXpdX8bkseUUFbPSLaYMJHjxBN71eXksa71pTGBCh51ZeWDPFzHbyTFoaa3RdKCWFLG93K4cKbU",
  "key5": "3g5CWSkkwcxUHPrenG4noQLyDL31Sqh67PABiJhjRnGSS6E2HPLDvbp34JPqfyNutxTNG5J85vhEApPZXF1AbAsM",
  "key6": "2tEDkahyd7eW8vK7BVy6647s42TUgL5a1TtsefVQTYLASnaHCcm4E5xMLbRqP6GbF2Gvd8WwagpfwVZMYfTxwg63",
  "key7": "4SocUd6aFqrVRGGtrTuxmGHmVLDDy7vxokKrzjNpFEetqe78cDu4TbiXKqk4BoNj51e7vpKeMFitirYTDsuA8J3r",
  "key8": "66Sv57AuqVn99vgLg5fxj3JQu5BPnj8B32e7Y4zJf9y7Mdy1NC3hVak1NGYFiPFWtGbQNfJr66n8hnJaUTFcrTTT",
  "key9": "56fJMk4Vyaea3csQmZvZ4vrVPuFaTxu4KtBFZEoFCh8ZRsxR2c2Ww7k2hay3QAJ9R6xwQVZkzqkR3oCogtjpHgSQ",
  "key10": "46MvxGi4Yg2eULB1ine5ZzMZpzjAMsA2gYJ2ywyJvvgTxoRCmb6soarWndjkVVSBexmLmtBURdJbKQojiDS4N6Q",
  "key11": "5GVyGYYMpkkMy2LiGjv6CxmgmsDPdvv4kjcTpAUJMzLAPk9xqe49dj5fDV32encvaeg5fXjoZnDaapunYBhcPx91",
  "key12": "N9B3StvyD48syMwYX3dDsVbwJE1ebxNEpF7sbRgF9J5i9DyUcRMG15UPoU6aAY7rLL8kKmeN85F8jLsWczKod3Z",
  "key13": "4dsLJr2VqAjBoJqphhX7TTkQdoJcdbr7kfwaF4evv7S238F7jA6udRmX3qwufbwjRcy1WWZGo2TGJN2gdgsryqXE",
  "key14": "59gFrpRKM3SRULUAkdGkqzvjhqupdb9jSqUrExn4BvyzHb4gguAh3Ss1FjSDq91ngTYV8oKdNEeo9ceRvfVLHa3q",
  "key15": "5VeRjiTUutCEDHvcgj9mzCNfRmzLYFLghWP96qdRhG9Npfd3coDdkiaXEv8rgat4jSDd69WxRTQGr5uCvqtxW2xs",
  "key16": "5E4JCma6jDoYE2p2gkrVLpvtwGe8HHBXVq1ZA87R3iAMEijauG6CQDRNXG9zryS94raHNese9id7ovXd38HME3t1",
  "key17": "3VxhMfKUH9hq3Ek6FHmKPmzZm79b2ye7GzGkSgAYAaVDQVnoWR2s6yUMUpujioymJozfUjcp9ubvWKbx5wkbubCd",
  "key18": "35Wi7xNGbzJZinPMiLB8xiaFqT2ugFTniY4cFEXGU1ZEgTFA6FjhzSLB3ioeqEvGRkENANCGHxyVdTWpwbWexkPZ",
  "key19": "5vVrMZDjGEaY8gW1iBhU1VSDnpTYzrR7k4MwvziELe2eGySmcFLjhLyw5bzx93ztye19tg4jLaWN7bPTaL4HrsKt",
  "key20": "5ouMHyWLgGARaKsi7VKTMVzHpPKSBiDxLCqx64QNtL88Jgm2hqJu8vNQM25bqP7f2couvm6rThuoyjMFM9s3oTw3",
  "key21": "3CeT8vokQvFnDmkUd4aFe5zMjz3YGZGLdXo5XAKcxQLyyn1cx7Cp7ag2LjsB7g4zXbtQpYEch1LgLybDReGXLF7j",
  "key22": "3dijRqDVv6DyZcAbeMpieF8knu2YX9W3WGonumHhPtW5JVun3qTCieSr3vqcC8Uh6ZTnQeJv4ENzbJx72W1yPcxm",
  "key23": "4pbiw5FUWTr5KDcqNo3sxWCwheJu1utERFnsvpMxVkjxQffKC3AvzZhvVX62oZ5KSj5iVBwkTY44kpXQGQ7h2R4i",
  "key24": "4kFwfjyTYfX1ayxauHrHV9VEHj3jk4HnyKhHmZ8gYNrC6LdvNh41gR7JoafRnAY8q2ngKusCRczn112wvo1FGb1Z",
  "key25": "2jLwzmw2fFAwUzLwMaYbJd58GKDrEfR53VaVinpRpX5FTpBXeXD4wPV1hVBJka2un9RYYK3A2dQDwDkW9NfEPu4Q",
  "key26": "31NMGv1F3drHEF7PaWGdDwKpWEHovzWRedWFF8WaCD1TUAG75KNzAvz6P9tr4ZjTpqiWa1zYqickM3KoM884dRvx",
  "key27": "ry8X4DdLnUSiEe1QyERHGpnbve6k6z22Ayf5Vh55UoXFm9TwfAkXpncrowNr1ng9eENfHMk4jEG6SLuTnuFp6Tr",
  "key28": "4BHLgJXyr1YyE2YyGGwFFViccxAdAPCoJUTWVVzo2iYJB759b9MPzK2EjFH75wz9vtdF9oJ2CTx53nniVCuUavMT",
  "key29": "2LmsJbdPoJ9NqEtckDWV8yKQ8uPzXSyWX9Bb3EihjHYBGGwXWpfviQktv5gv4AwWCfmJnEfnLktLjHaMFrdAAKBT",
  "key30": "3dGgKUrmPVEhxj71BhHhpprrFY6hK3fpxBdoSaQH2LkcTGXt1BTrqezDHacjoB2g1RZUN5HMmz9XxtYbYirhgrGA",
  "key31": "EVGFGEJxmoWHZsMnjcGugP3C1xEzis41RwqFLvv9m6X1NW3dsBcGY27qmv8BFWv6jXoJ9wsJVVxqEPU2vM2oJVA"
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
