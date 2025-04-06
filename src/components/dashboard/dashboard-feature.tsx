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
    "2KbxXTJyJj3RjDChb8V5rDCF8kj584SNTzvWhHsuD2Phsrdq2u17hvKF4GpHGDe46mYUr1gKaG1Njzjzr1aPN2Pj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59aYvjXJr1rQopPwYpf5wBwrvEmvhyTMLvBF2tVgA5ErJ4A6iqKhxCHzxMPbRvUKZhC2FBdMfAJ9LAAeDPU3uAS9",
  "key1": "4a6mSTrqjMuku43bffuyre4eeHPAm9NTQ9a3GvTu1JQZf6cDruYo4jPrfykha5F7dGtJM9irA6tCtdVToJV9fY2j",
  "key2": "2RfY1irfBDM2JSGugC7jpscCG2Gc1e4UD54kr9YskZyVkgEN3Wc9NrMggdnTxPDGEejJST966LaJzVetNToSD9cR",
  "key3": "4T7wQ7kCBhYx5R8ZtqxhZ54WmhEG8D6VT3kQjZ9qqiLyBPNm9Uzcs86QTmbDmDLzcAvhrE4LKmkDXqZ7LL2h5pMw",
  "key4": "5PFm7CEi61J2Hum6mk1JuJ2wtgxKeC9P1qiFi8LdEEFCdYqpo3GBCFCbkeMZbcVNC1mEfV1hP66QxbLYzjGkJkx",
  "key5": "63Jp1heBxRxF19R5E2ihZAVYaUfzj1ZPudXrizUia3XUPhiXd9YTqYpw378eEFTmibgfAGikMS45GcpCHvG8icAd",
  "key6": "4qLZ3x6wPReMkXm8FdQkVfaSFbby6pChJMMvF64ZPGRKNp11BBiUA6wECgwU9HqozocXkmtmGPtxqWGPTi4FSDCD",
  "key7": "4f6x5jfNfxfMAoWxRJpHHSowvoKuNucUyg3JpHvzAyztcTb2e6HDbhjrHsxSG9iS6HJTTv1ZdxQCAQYK5SPDayDv",
  "key8": "3465AzJo3Bke6pZurwP7vwMemZf6cthp6puoa8Jo8Kc8TKTdUPPzy7MuiPcaLC9PhqcZEanBhRrEJp2zwJM1eocF",
  "key9": "274jex4iLjt2FuzvXVsFqMHEXznmZZWhJ2QDLURtoB29mVpscRbfWTfgRKnLraXQ6dm2VviSct7GgFGFzXW751Da",
  "key10": "g15A3j2FCELWu52WnKTLNRTUP1zkCkFuuCCKLtHYnPWPKyS7DvoKTg3an8ikLCBNJMBwnV6nWhVKKWpCtA4qiRS",
  "key11": "4zuXE3WDMj6WAfBa8JSvagF9C3wZfFkZ6VmhgwZjkWVWZge1KFbs9Uv9V74hpYtE6kWqCrA3nuJkxrJ5zNjDs3nW",
  "key12": "55SLZh8qcPfDuHnR6Xkacir2YgtZ7HwWamm1NJ6Fwudn7iZZApWeqSNjhvQmLiJmVYCw7V3KjiXsuhkvtyNZdbGM",
  "key13": "3P28TD4KFXC6SvpAsZRitLbNQy4j82d6zpVyHmf2gg43HZRBuXjU8qH2KyRoLQnCSgCpSehgctQwqDi4zZFKoYee",
  "key14": "5BvUu6iAxXsaCHnKid524TqwB4iPjsQoPc6kurvi1bGXTxXHUPrbVDNBRta9PBcLiosJmV4esfA1KNFfLNTu6zKM",
  "key15": "5T7LUETFgDUSw3Z2nkyAQZMkPGcoDS8niBADmSrfdEQBXCD7gRTSpWgCLJ4YFgjEDgpADQgKDsMPrHSNv56nLhKS",
  "key16": "5rzFJPe7u3SayUnrjC8UQLyCtpVNLv1Z2LHJWi2NPw2h4qbPcMSspFXYMbcXk3KEENRdSjFprXxk1agz7CcqVSzK",
  "key17": "3tizgBC8GXw4v44b9WZaNq6b6SL4t45yKgQSPdbbBwSWpB5prWozUmvwxkJkL8GpY9hFY4se55xpJ1De5HP8g7zY",
  "key18": "52odeHuKQGtehnSc4wjJHLCUqdue2Xn4AvwetsaH2uqLWTgZzYFsCkSVMQZ5SxZeeQdSTEEyH52nSr3PR9KSTauT",
  "key19": "fsrdHJ9ijM1CUcUFo1ocGoeNW4cZNQWBwgm7wwq1UoeQHjuUZ9vx9bx1XQvQ5SY2M6nXiCJaBgVqpcspXPRrWw1",
  "key20": "4eCkeMfoBN6MvCkW9in2oVXs5eV7Z7Y8w9nGPEmqnftwUzij4NbqzKqUNteEQAjE5C4oQHZhExCBFX3wRdEYH6TF",
  "key21": "5rYn3UV47Fth9U3JtQEmu17rskTH9sYAxubkAMcEwaTBZjdtpC4FHD6dTkVdW85j3et2cnVF7ZhMD7UwVN2eEFpE",
  "key22": "2W6h6y6DysBSCoDTE9ohKT9gXTTYvqia5zm84UgwD5gyPvqZ7hVtfJBmcGBj1cu9hX7dJ13RSZGpXeMdszW6iYHS",
  "key23": "pUMd8R8QUjXELrmB58S2x22Cb9WuosAsrfQBujenhpRj6eaaKydsJuxNL15YHacoPBzMuJaGsXz68T2x1WApALy",
  "key24": "3rGJHdpGDekEoaGh2rPFBUxaHT3y2BiKMTEPzsCEK5xoDrdn7xVPbbwaGvNjyLrTdPTDjkvzQ6PPnppgWgLrCanB",
  "key25": "4cAsHYjpyrDYgDdJmakz2q9fKH81owwcjbFgxbUF9KzBR7aYwFYcnsQx1D8WuTncmfruuWRtioNSW2MbqkW1Gkrb",
  "key26": "5dsm6wqa1ZzPgN7oBgSkgrdV7iqAwst1zNKF1Ssh2DMGYpAw8DZpKQXjsBEYBtsAeKpmtqUqoLFVFiz8nLCaMu99",
  "key27": "bzokgz6tPmdU2gocot5xvPcHviFhNk5Rs2UWr3DMpCSVFUQGoAtxwDFHaUrAZLgVpg6g85LftRC2EhpSXuwtZs8",
  "key28": "5nafERAw6NTdSWuXZpF4L59dmG9Qj1Q1gA6r8xRCiQCDLMYiLpmTjYmZa2fuGXBLcRS5Zu96FcY37FsVpLqdCAvh",
  "key29": "4EuUjsycGF95mph7Kv2jjbqSzcqcrZkL2JFXeidJTT4HR5YuBB65zMdKiFP3Hu465BU9zvtt819YL7bHD2mjQt6u",
  "key30": "uwp7n1yQ5YvcT82KxbSSkPofSEZRZEaCX3euP6NLaPwF7xgdeHqk4WkhEGWANAJaP7rf3pXEenvNvyAvV56M9xU",
  "key31": "25bUzdZQxLcxVoUeeJHt4wqCE1CnrjBAW21chgyDDGuvhsNejs5CG7jkCyYRDZpZc3QyeTQRLEsLAs5Q7a3EH1VA",
  "key32": "2vhM3JtTd3qrVvGc8MTV6MLCLLMQ7jq2LfgiQts4SWBY8YbqZnu5doehPbKHSgvbYmsvxM1B1h9NsJq7tLJZeUV5",
  "key33": "44f6JExgxAk8Ev95jYWYnobhJETVawNH9i69uie5CL2h198udsAcsG1kRdfhAkyx1cya7GpjTECnRpDsJoHdU9u1",
  "key34": "2kW4P7gwBJB5sF7w4zkCfL6LS7J8uEqSAx7PF3yqi2YqjBfKYyvtuZU75xc53T3nToC5Vd5Yj89P92s5ahm3qy5W",
  "key35": "5xuzLh9TE72uj18ZVRkPNs19yt2Dr4e8eX3Qeyg9PWDPAmrA7fvqBwnDN8F6LWBZ3RHqyhURuJ8yD4KiM8cnT25H",
  "key36": "5ftTC4oaEThEtwWDg9cdHcNeEbURWebsn1iSWCnGeLyX6DdHTpe3sLXChRb5zKBxNTN3jpQTCWASE3czxtq2JHLc",
  "key37": "2K4NBR8EP2p6P8WoRD8vX7ACyNVAcLvCDvsnNB6s3g7es6Qzhwy2CSweW2tYmbGrgwMqtVXEr9gUFRVdtoRJkqB3",
  "key38": "26evxjj4QsQjgsbPgu23JQhv6DL3kRy9hGi7XDxbcCPiw4N8KXudaS76aH8u98F8VWz89hy8wUcYwU7mb836JEJ3",
  "key39": "2mvUHM13j2ikvX5UtrFUjDKRogQydGtGKk2iFMiaSCSiR5TpySWGE41nbgH547FAZkX6zpFdaUZvZmkmZpFDmbjz",
  "key40": "4DZgRkV9CzTLbEJrfzhRfkS2ZVb5swinaGwiTVv3QxQ7fPchiYWPEXRmKCWs7RUQgLUYichcDo7ACuxJ9LH3wqjD",
  "key41": "2h3HyPAnrAu6Z8xnmicXBh6ce9DPtp1r62yGsQE3eWpDMhSUv7UXN2m5tLsmUHPSRmbH6Tc6tKqEJdoYZzjuEvp5",
  "key42": "2uEi9PgxWGjLu8ZKi42vEPVEirHdCiDNuTRHqkyDkv5LpFQPfbbkmbNhUf1kivNBDyak1wm6b7VBMtFAVLqwSnvr",
  "key43": "2J7a2AeFybP7q15t4eq3jv335VLF6EuwWW4GfGWUxXZJP2sq57KH6NaWta7Ge4Vw6TEFRB3xnVJbLToturtP1KHf",
  "key44": "2w6zDnLBedWdTygekUTowmhAzQLXbQQSywCaAxwpCHRaC36wV8gaUF7nmMv6Yds2eTxu229BD86iVPTX6N3Q75nj",
  "key45": "5MKBB3JQAAFcdJT97E9idGarxENktGezE5KtRkodjxbTwu89sWyYMW1K1tdPA6grucuERSnaQjtt3r8yxAvxrAZ8"
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
