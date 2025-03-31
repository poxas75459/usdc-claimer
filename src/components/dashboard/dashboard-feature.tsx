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
    "2hRLA94YA8tbBZHZZiCZ5Mdz8TULtPd3UyEJFpq6Mji1tu1TvKjhdj1WEehobLR8oM22o436An6R9mjfTCLTx3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MuRNLuResLN2V8WHuCiUTuVhrHHGBLaubUBsqAh3vNjk7p3oRzWnvKAbdSo8vVAMWsoTuV9Yg5exdJrfasnGeLz",
  "key1": "P8AuXncGjHLvQ8Ga37vQSxBSqg9iBM9ybu4Zoe6scNGQ1iBcZuDaouxMq1ba37q62EifHWhTjuu2ZwnmwTpKqwi",
  "key2": "5GQVzaYrVtaun834QEQWYgypemBgDcPE5nhXnW6qkbHEjMJJzX4uyqhG2xYcATrurZDcKojrhx9atSMkUJSqcXdk",
  "key3": "4gKncXZ2WSW3UomUw2rHUwJaZ9rQVvhnBKvqah8y2xZNx277kn2GExciwN9Q98z6vagA1MiQ8Rk7QCqKan7h9Le8",
  "key4": "62MgzWBufMPD6baaNH5zbogtv7PARwG3kxSuFfCnLshyKARUGFbPsS2sxz91JdJV4pBYQJ2uPVhkhNALgj73yM5f",
  "key5": "3em9ZBAB2K47CMx7MeoSsKTyxrkE31xC1FzBTiN9goZQWzG7ecUqhTLokcV7ToKcYzqRx6bJAZN8ZECBqq738fYW",
  "key6": "2mnvaYPpfaPjTFhjKLUrVwFYeyupxqHoHZNSzW1StwEPj6xkPPpoekmwnHS5hMS4VLAo5a1bWnNGJnpJfV5P7o6u",
  "key7": "Wm2Nisjj7gRyQJCLTzM7zEfa8CcsMmJcxhDQXBg4T9qXD2cxYghXhX4jjrwspNFbwBBD9KYdhvgYuVkeE9UzLSc",
  "key8": "2dHf7yHGVjewgDo7bpViDBMTCQbgWKpuFLTJQ68AhSx2mucMhr2WDvTgbn7PuQnHq2AoVtTZkG6PxrcEDe2cyKxT",
  "key9": "4Y96XGrfBCE8cDr6FNaQzhwdZSE8qcYnxihvThbsRVKN4fQwXTx1t68GA3BrdGRDNcva7Vd6EeJabCtmjbX4FcAz",
  "key10": "5kwyZxwVKzbzG67LUQNEjqcCHGQYB8zr1SBJJosUdyv4QXvzwK7XY6tudJqXbyh8hLGFvXUzGKPWE4hpXH1v3bpR",
  "key11": "2xW29AkcJ8CzPUVBQYdiSs5RhkyLgGigwuKk2ahw2BnDMvQiEEDzdo7QL2Kx7P56bKWYP6v8EaqkgraqhcDVFNiN",
  "key12": "4rK7ZMjNUeebzKFU2BWYfhQu7i8a8uQiot6h9HvN1GNKy4Edi52vNr5SYuvBZWQxZSxPy6URunAPRPps46rVaxPL",
  "key13": "55hAE7DwGaKByLA7uxRswfFZ2DJMy1jkfPTzLtF5Ccou59YxjybToQHEeSCKbFRRdxiw7GYywJeFkb8P38BN2uLL",
  "key14": "3pNHzejUj8Gu7sMC32Do3nUfiwjoKVHxXorVmxNH5ahcqYcH5TbeBMnX55o65d9E1V6UqjJTLBRG4kSF7SiUHsq3",
  "key15": "3c8Hs6FxinzsVQGv4k2JGXk6s5KujkX5niMLv1YBbU3jKS1waHHD4S5bmzgFKe3QNUsBeSgm7bzGrURkfdhTvcxz",
  "key16": "5nDWtWsuAQh14AJPPvW9x5TG73D16afDNVcH6HEaaRNGTxfnkvkkb9LjKp3d4GcL54hnQbCuHLTPgaPxd8DuMA4W",
  "key17": "67CtkZ13XKkR93XZeXrj3E4Ka6jwVbDPURjdjS5gp1PGjJZaugvFCMNKgdXvm8gMuFsymP5TNXb2uKNA5BJRjNmq",
  "key18": "2vipEPGiBfHYNrj2zDQdeApVGPccxGYMACXxstbPRjXnTsFim5F3ExWcYdpt7xbn2wyB6e7QRVpszyCRySK4nGw3",
  "key19": "2RyUb73pcV1hcTKG9PaA2XJ7mJdvyEy5R2GCCWywX1CeoXa839d5rCU7fEW1XTC2MhniaUgEyPELX7UEaC4mqozj",
  "key20": "28mDhmj5jLSp66haDW3mEpZvZKhUoXnsC3P8qSFV4Xsivgceq4LJmM4q46sPtUKsLjwoh5R8uGnkZt417zpM2tu7",
  "key21": "2x9L3FFKuGxEFoTuNw7SLqAHMWS9oojvFUhZc2fK9QLF2TzRP324rWocsYu9CcD4N98XZWQ9bPDSHopksQrE9HpV",
  "key22": "M3cKd8LcaTiFczBhz5FrLPAmxnQ18NfugoNikGzVtzGJDb7LzWMG6RHG39Gd1HXY6vULK1tzZNTptdCf3sByTRs",
  "key23": "2LfB1LdXwhkD5221k6oL5KwxgFSzgDjBhfsixqD981uGH1UrC2RVa1zuL4TNPCsQe7Qhvcmvht7EunxbeJq2VtvY",
  "key24": "31kfLqv5LLpoWNQNotmHj9megsJbFPrbH9YhBGuZcxtaXNeCcaitGS9h3GU5Yu97cAq7UgjDwzZwfhc9dWoYUdM",
  "key25": "qsSpHgEYEi68WLFurAykmZ2NVhTqKcuoGt4ZScbTMN3TruNoY2x6pioc6PhS5TpxC8R23MfjvPLZ8qDsLv3muhr",
  "key26": "G99dnFn8GYHpmLu7P1FCnR4uxRRHPB6dxhVNv1Uocbeb5JsmVPSfGPYGMzf2VLp7bidtjR71eVk4iU17NTxc6Bx",
  "key27": "2vs97LoURL7pWXF5LCQjt6agrBAqKMNec3RANRziXuFJq6HZs7botmwCXumKiWe2wG8Kd8CvGQKTm4Cksbu27oNH",
  "key28": "25SjybX1rrGNqv7fVbyi467MWpP3JGK5jKTg12GnQNt68jsuSQnJVvSo1JdXPU7UXAaTEciURLGHCDPuG9feHKmg",
  "key29": "289XRCHLCZchZvUbbwehyjiVUhGaXZKYbXapHyA5DEvf46Uf6pqMowLuNK8PMuTKDvA7UABxaXTEthiKFEJpRNN6",
  "key30": "5N1XQ8N4aPA9TDDruCdMAATpAhLjr1s9gp2FtSPBbU6JzNGWRkg83jxkc58B17qiEEe5ueUGTzYtAia54DCWEP7X",
  "key31": "4V7RJw7UXsHd1qLQFB5ML2Y3G8hheqaXozXXczcRumuivdAEPpxU3gmc5Soym1hi5fL53EqD3RDBsk3xNYso2h3o",
  "key32": "43DEqLQJSdk9JzpnM45XmxmK3XVJPxQfiNUFW2AKo4GxisBmQ4bQMP2Hvbb8pUVsg8vjxbdmf3jW4gw9BnsPJbnE",
  "key33": "cZRded5nFwiD3kuBJSuyPMPUhNMHhmqPxGQmmQRAtJZapB9tgWVEJqjYwXB2R3gDHZKRYNGaqDAVtVxrr3Qbb7w",
  "key34": "4DZTheoAEbevGsHGJwsjEhNfdz9iVXgtzc7R7jmRJnkS6k6NpmyGRaoRXdwYdMyToksCzbmZq9mWgoGyzuV7Fsob",
  "key35": "5L2fnUvovhMBQLNpu5ExSSvnydtn3HRk3Dcx92nY5MUKZU8P5GABpbp3UgzhGkiAxR8kCkmvQgr7Ry7dauwbWQsL",
  "key36": "7rNYpfs7hQDhNy7FQNoESkWLuZidwWo2jvrq89UQn9bEQvEU9SvG6of7X1K2zKHqGkYMCLDLGUzfk7sCTfFaNWB",
  "key37": "33FZtqhG9eqmggPRrTJf9VVH99147yfafYKgApFVh1ab86umfJBYogunp7eKKdQBAxb6bWDWAWbqtvjfNBro9NNR",
  "key38": "2f5LHccARncWaDpCFUrY3aJBwYeZbskGUyckUvBQsdfQSoEmLFmcwCTGVBtN3VToDC4BD1m7Cj2e24aaHYhkHM1W",
  "key39": "4pecmQiuK63QyAboScRfMaaCucrPMNdYPW4uNPmbKsPKRW3WnRShHHucQG3iNRFH7ekfEhkyJyKKoGmZQcX1tw7y",
  "key40": "4CshYeTwCWKbAwWHnMBbtyymTnN9hW8idpM7QbUEUq4dHHNVhSrESkkevrzJzvPCkArqmFhJdGuCE5fHSwhXcFq6",
  "key41": "41UBonMgqsaGrWXoPxQRW4A4HrusMV4NYTK2PS55tfd6tsvi2myxXRJsoqd3U2G25oALb9f6jPFvQT4jYufcwAyD"
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
