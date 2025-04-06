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
    "5Xj6dYa6p9zzLDLHwiDNM2XcvFzzW7Rcv5hyqGQDJ7d7o3QngDsfUaCa9Q9UuedkYeLzTu9nRVMEsuLnMY27Sq3m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nf5m2jnCGod4UHUJzLdPNFeBNxTmNawZAj4K3e4mdZ8xc39XzxwWQg3akomoXYRBRRXZuHYPcoRtMccJJPEtKhi",
  "key1": "525KyNmknzDiFXiVEtCTrYr3NsYFM6yW9VtD2s2n4JGBhQoC2ktsARgV4FsXya76Ya5G84QUEJRrWLftEJnx5B5q",
  "key2": "5PbYZp2E6ANecRzSt41bK7nSDBzHLQe6wooX1za6VwzSbWx8XHi762XSTKBofMDt5E545VQZzb4qvEbSupN9n3du",
  "key3": "5rqcjE7ScVphYcEXPeHyCN1hz2mf9XVZ72NiKtErWeaHzpb994s1Dn8tV1QmFm5xQk7WE2HGtiXgPigaJ1bBCC7r",
  "key4": "pSBCiEe6FMpvD194LwyCCs5pCMW6z7MaiCw1dYCFEtBujzH4hCsgFrJFxP8G8Cqrzzjae7a6W9Lrk676zLysSti",
  "key5": "3mPBFnn14x3HyVyzjXCxsZ7EftHjbTFBpS8FgFbJPJjusJnosGwosvs8He7uknLr2RaTBrYhAkrXteY85TjtUWoc",
  "key6": "3SxEWQ2aNvkdi8MzWfBY3YPcVXbSKGxoS8JAwQQBgQryoHsekMMndsT3TLVmQs3k6B151kGhusmpJZ6vBRGP5Ye4",
  "key7": "58wuLb2Yom6QX1LZbjziZJP4RXPHxFmkPZQUfH13XBzjoqSkYdVyRHhLUrqMrgaV2cYQgrFMPKqoBZSHiLG8e5SC",
  "key8": "2U98WrbbkwdP9B8LdD1oyT9XKTHia4vuKXALHHqm1HnnKdXcCQErWb2tHkyTCuctYzB5XRHKnMJ3LgkpARyLb9Vt",
  "key9": "4fvsQwMhet2fFZVAfJP4NBvReAmjQTHPp95rsHBXsj1PYmFK8RzboH89uEst7LwTR4tDnsKznhZ6tZbAGU33iEmU",
  "key10": "4xxP3C93jPXmycZ8fmMBpkpxG4uJipnUn5MkFF8md9U7xXTbCrgGn4dTckMwiNTsdBv8qewCBfcHJqGbStSqaFpa",
  "key11": "3unPsPm6WdhDgNtvekjTajRHTVXQ3fHXyjSqeeYA8nZqNmUosLVwKvoBCuuh7dTwXnrPH5iYwL2mPStF8vRjw6Bs",
  "key12": "2YBasBgTpdESkt2no4XCYgo3DeUFrRdRxLSpahZHiohea6ybhdSY65JWV5ipFgkQC2VpTjRcHjXqrwrL8Kk8qRJx",
  "key13": "4Qdh711AQCniUSpsQGt2vfcdtEv7rETHJY3AeX5XiWsJE9kLbYrjYs1Hz7AfZiAek53HirkUmQVENpLBG65DM1vt",
  "key14": "2HiUjquTGDtcw8b6Z9fLaK1Fi1QxCUhC8sfzykvqGkY7MLH5Hkagm5YSDWY5aMgVNFnjYmd7X4VhR4DseJBBWj34",
  "key15": "H52d6yJx2LmaCX9XZKCw5C3k5Qg45Mmys2wscXiTwAJQpBnCd6Q5yvqbPuKQcnyEPQneEpekwDQXJf2wYyQ1oJv",
  "key16": "5dBqwJ2rsk8Pqqpi9gXW5DudGekwhKTF5dhqMEe98mSRpV2DKX7S7ExzM2Gh8RJGLJNVKR73siA7WmGJrDf4xnoH",
  "key17": "gs3DMeRMEDyfsRrSiXoukCtz9djyRP9mDX6sc542P1FpCyTVpE174M6XVVfCFPcYDoAYXawCg7QRyZCaXyt28WS",
  "key18": "4dpBRbWS18CrxndxG22oYq6bwsEN6W5uRty2AbTxXUe7LMyptftBpi7eMnKYczkGChYDousB7CoqAiSSHUkDvqbi",
  "key19": "5gWykguhFygrcSTGeC2PaY44mt9WL4eFPEUXZie91eZEnvifwNdkVNHZn3hX1vjhNmTafXcqD8KWQM3CPaUCbATB",
  "key20": "2SNaWRr5sWEhF2K8tN1jviZbQzCDfsQBAU1qq6x2B9PNGeh3hcKQWG9YwqSW6BFyzzSjLSCGiyNGzYbyPx7mLQS9",
  "key21": "4LFwDrJAdTNpkW25oaNJtoN2xNJ8ZJZ7k2xtSPkFoZFvpwD8dyZkPH9Jt1Jeu4PJc71KnqSG4xoUrV26CqKmPGiT",
  "key22": "3x6DS8empgFSXGf6KfyY8NmC5RbiRkTVvU77zivD3ysfoNws3Rs9uneHtMbuNKvPwqunwwhvw1adhrhQvc6XSUze",
  "key23": "3AETGjJVzfpG4bUfQ982QEEKj7CAQeaK6YLQMR311e9ShgHEurKhLscjnG8jnctf1s1HCppouWAdoyBUgt2Ft7Z9",
  "key24": "X9k9jVwgLzFo8pA9d6p8hhvf9SDG56BQZXwnt6GiHeWKqySLpXn2fv9WZhD38MnwmLLDmh5ABS2u3J9AmePDK15",
  "key25": "3HXnjpPnX54wsEM44Mdx22AFTE6F2ajYEhCDfiZ819gL5xmQcf5jfuuXZzzJauSrba9qQvgLvR3JYvX35oFurxsq",
  "key26": "31HMPTcE3NuoR9U2yST3DsjzBZvCx6QBvVxd9YFgN3jvKSwNcBwfj1Ck8h1ryLR38nxhk1EiPrRoJQuSwDfCrvQg",
  "key27": "5sTvDmwbJ4AxhBT5RRFSvRqRpgUscysrnbCfzhYWztKtiQKnAyHG4bHkxdCGcr2XDnQaTWYNKvLDmvRJiH7eLuyd",
  "key28": "3FGvNAVrCL8kB8QABwGy4qsnterSkk1zkkw7gpWLvabXm7GRU1avck3oNqjX8f98wyKHppagniA33f8MZ4rmdvFa",
  "key29": "5AGb8p51JsEjKV1sMxdCSVnXDCLS11vh6KXp3JuWKHfF9qcEriHyDprBNA5kzr4pP2Akkkr99rzTPRKdKmxTLFgz",
  "key30": "65nzZDpAAkuLHfi6LyvVDJCFB2uYMy84yP8wrCxRYWEmpkW8fSEUaeN6yQHWXg6arVTokA6XrMcS4N2JEQkYt48P",
  "key31": "4Cek8ramPMrPeiVfCMVkvi8p3Af6rGTobY6LaCGYL7NYzbTQuZJX6rAMRvsWj7Wr1meAAVvNDYQ7KAPwGD5g6WAi"
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
