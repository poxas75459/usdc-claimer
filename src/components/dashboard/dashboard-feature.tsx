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
    "3eX7RxSWxmQrA7xVQhx61tzwkUSd7gUf5VD88pjYAEpYVAwNV1xcsm2N1XSDmb5FA97mbcV1HqrTKj1CmfKkXJgd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49Wd9dByRJTNUzckpnRucVF9BJJo6CwxvgteXgeWZFxBwXhLKijxpVYeKa732ynM2JBah59dLRv2C2ECfEykM8Ux",
  "key1": "kxo6TZsWiGo7ZvRvrQXGBK2kudqoGaRYCYSPMkcVZmXokjbdjFucJAvnWgz7BGCsnAs8XQePbimJCXhJaEwU4TB",
  "key2": "3FbUer38k7PXZ3ePJ5EUFDJ5qFfveJ1btTPH7yAWumH3dSq7Q7matw7vCZpx1xFKtW6FE2dfoAfVymreGSPADWeT",
  "key3": "4vCqHuDaWmidFhgJKzUs8wYYaBev8UZLD3CHWN28dZCAiAdt6PcLZHs3Gv7NPYd2Quinc7GTcdnBu2C1ouHxmtyu",
  "key4": "3RvHPpDuR3T1GEuG41VCgAhCkGAiLa6umsKfTYUf1drWuee1SToKXMuKBdrQKGPNajALZwBn7BYGDLCPtLfPh5yp",
  "key5": "4U839L9VdWFHWhj5qF2eAHGX6bSDNsNidmDKyUMXPH8MgYdjAai6LXYfZbTcqkjjZdn5N39dZSBp5XYaEzGfmNAD",
  "key6": "67FwkRGMtiNWk6g7ieCQFSVRxcyCarNi2Me9xRQmR7RHWd3SPdcTq8i47GtfUyvv8FkmR6NwmvbqVBgYA7yDCqBW",
  "key7": "3CKEkuahLNzqqzk9CnY2RtV2MAUykrKbEzkqJBnBUECCLTjXyPhmAzNYa631m1zuUDPYo2eC9YXTtqfevPpYquFX",
  "key8": "5UAetgLejb55pAg12Lrx9xJNTXoXcyASdvmdNqVAyavP6JyQEipe4P3RQL3b8sCkEnuSKUFkPp2P7UBaqxoM4wev",
  "key9": "2ispJKak2ZeohwuxkKkX86noe5qrkBnmCdphpydie2v9pos4DJvqzp9n5fhHWUQ3Rj3spJtnCAoiuRiEM5ZZu5o9",
  "key10": "3h54kbTUF7f1xX7SGkPHE4e7a9mzxkSWax7FsYxo3WNbGWymEYcZicLAzU3GuPWKzsTh6JyXFS9BDzBneGVjnNDs",
  "key11": "3snkXJWiMzYtZajVhFFDY2vBMPAU2m8TwY417gbt6NRraEHbATT3n7R3ijFDUYHUyxmJnGNBGdDeRrN4KWSWMoQF",
  "key12": "2xGTMEaWLnXE8C8z8miSbwkYckPpvVUxEcxPeB4HfbNpoSbaLeC8xWgtN6AmvbGpgrjsYZtJLSMsELu5WR9PawCk",
  "key13": "4SbUHFcx5C1yatbhi3z3kFY9ThZapfWMdxnopqJ1FPA63Vs2dvyersAopJQU92s4VfZw2J9RoPFtUVyJk28z6SEU",
  "key14": "NXY7S7JdPxQJw7Z2CiEYS1HAPHUBxD9hg8uWeay3zqCQmCkGiooDrWe5XQkF1yNqU7RhrgmfsQRfcRFcKU77BhS",
  "key15": "2YTZu4GqPWpWCVKBfBPzDsfJEGR4BN4xogSBZe2ByUCajQrf381atPUxnSomGPGfYMKtN1kXowFv87i744QaUYu",
  "key16": "4gDwGnSydyt7DKnq6YR6z6gVGHsdgysL3rmvk8pyswz4k15xKQVa61b5ZfvpScvpAcPk2ekNwXpRkgKGHxvZHWeS",
  "key17": "2koZ8ETfdwF4METXfMWTP32ZC6xLNgPmAySX1fmimnB1E5rnstzvaGfNgoGdqjbGbQbo324yc3bhkeM8Awsw5VRy",
  "key18": "2qTHnvaTtn3dyEzBDnPL7ComGTk4yZfFQT6yGnLdSbTiSKExM69q89qDxoMBgWRd5kzQaF1BGcbdYHXjCvsiK2x2",
  "key19": "3kBvPPCnQweshtbLdPCj3qB55mAV4uhtTNWAYpR8skZyoikqbjTTWNVJEEuNG8h84W5TkCSGyCMPpnFcLG1hvejX",
  "key20": "TBoWFN9HjtwJay9WWjwYMAYMgxyPf1c9E8z3M5WJeURheJRVb2hgjUPipEabot7PLAoQyKrDfBwRcF4AakCyuAJ",
  "key21": "23NYcKpSusFE6rNKFV9dKZc3rAtL8sWYxnprnqNdFUMGG9mWWu1GeRPgLJLpPzG1MSbdDRQ7KFKAAHmBfq1FWE7c",
  "key22": "4U6yocCz1cY6qpSNbLbU5Z2PXjkXWEJu1cyENEm7DBypop4Q8nm5yotjVySCYSdFszTUxjEaUEgDpNvxJiPvkiS",
  "key23": "3ybubug6YYFY5NcV7JvY1UNdtFSDqXjwrid9hpRMqmRRe6Cjf8uCaXdd3JfaELwSF5W2Lx7u73dte3n2ifWHSSWP",
  "key24": "5Gf2WVYaochCArVMKCaWdTzZp7wnahyJpMSGMBrd2Qrb65WyZZaR7Yx677htPb6pzVTK2SgMzUunthr7ite4mihZ",
  "key25": "621h3sdsnG9MCWZqQRgoDv5Nz9p2bpPGA4U5KRLibhdMbD33ZSfkdwCRoKLWb8JNWKbU5WuL58ZFgiojVeQVYsce",
  "key26": "5sMsLrZGh5oB3Pt1fGpEpbwcFYXDMKxfykX67hVorXXQ5nSFdK4YWFDovZF8ntkaLZDzYgghx56KbrvtsQJtH1Bs",
  "key27": "61uuxEMwGsVRjB8L8RUZsZne32seNNntPAs49HsSMMcxbFYwxhTiwezeQzfvAX5ep1bZnCoZHw87v7aaVH8G5DY4",
  "key28": "3Z1SAx1nhm4BJPxgWtaqvARMydLVXHjMtJG88KG23yNEFw2e9SwRHdRoSh9XGGc1tH5XngijiWHgMZ4JBZXXMFtw",
  "key29": "3RfrYNj3pFxytG9VHcn8zRsnoEMXFDqfU51F8T5otbHGxfdLs9BfKb5muYhR2WBp6rXY1JvMU3268hjeJ18csH7P",
  "key30": "4cwacXnaxDKxxKUkDwNmnJwxEoL4xx7UBDU5h24ZWBneT1GQX9zauY7qah7ug6qsUkb29CWhAG1nZb6Aoqy556c2",
  "key31": "R61pMsSZY96PBWj1hLT2bUcDwLqByCXcq7tyBiJy5JNLpvrpqgHsZEzecRBYoYVabq4eMh7hQ7kWEKPBJvAfH3r",
  "key32": "5GU8KwFNCwRVk9XmBsher5QFPbmUUAXmTCWJ2zQwXD4dU6PcUuUN5RCusHFhfkqVFjbPTssf262vnwfejjsiCHjk",
  "key33": "4PEPZmKAoQmdgav5stLcpfrVGEj7v57CGjxyyZ39zi93HVHJiA5LMfuHSB3j7ea73ds18pG4j8BonBLLrXmYoHXi",
  "key34": "2WNURLwNhUmJYsWMwy7n8f2VhuDo1JKAjpMnhv4jYeP8wmUk6AjjV23iRNfvmnZY3QABPtBjAS9zvFLCmKbJFv9k",
  "key35": "64RSc5jJjgNBKmpnLQdbZEobYa9zBcS3EygiRXoS9XQL9ZNv7FxykQ8y8AVXjrmFWdgQkhw8Hw8pu3V7rDLXuKSF",
  "key36": "3rmCRH6MjBfM1huvpPVU7LmrozpQioXCmyB7Ze3rmWa2f86n5fEixupFtSHz1NJ4sGpzMJLK8m8co6KGhMfZ1q2z",
  "key37": "4M59ZFKSQevQgQW5kK4J4nBdW1JG2FSsSTTsuJWJEvmU7VTb5ghXXTXRRvozKAVyo6aSnMRzYPWgQ1JcgUSFj25H",
  "key38": "5npfvrkHFCYWuJvPgW8xvvrLzEKcADsmbkw7ZhAJ2GCCS3DktWM2cShBThbSooQyQUvnzicbyjhjmwpNRgswGK2V",
  "key39": "4H181MkqYwc2ZHzsFEc5xoQk8rKrg9csCaKLEUZHH98jBr4xx1j7i9njgv8nsTSBfomWm73DL6CnYunMgHMSnp5G",
  "key40": "3xFEddPwLrd33CY5wqUapdxUiLkRBj27sJ6TzfCKd3mK47kmnC5TVWQraK2ZDc5B5U2Lo6yuRX1DBsSxtt5Z2tYh",
  "key41": "279KuhxrZ5frvKS3x9T1AytqzTDDyptwFo9eaYWVmKZYxMNgV5ZNg2t6iA3nJHYxdE1hnU7gDHChraKYofgVyHVz",
  "key42": "3sGhvezmFKGE96cVwGm1wRVT853gRPjLihsEqY33jFFtYGx1Ho5hU4cZwvLzYWNuGbAGWnf1coPgNc9imcs4puXm",
  "key43": "5gQzAvC8Exh8REqJXjGtp73JEfh1vwD12UmdhMK37kEdguGuqopfaogZMTBzfUC8cpggJYREHKQyXHeBW6HSuo2d",
  "key44": "5gmVoGrSRwtZs83k1NSw5R325kjFhSkzDd1rBXHqHkfe8xQzx48PkEcDnwij3qxapkZ51sQ3kaFRgTqL275Cundf",
  "key45": "5XweGNTKFKqMqg7SrZAohJHK8mDt6mqHXWcXHPmYQwRexDqwNWMKTxw8UnPAtwqACCVWL4qgx1KRa667YgZTubPe",
  "key46": "4YARCJynfnBiVhj7fWPtc7b8j8t2QJLQt76UEBh1jtHgqnyxDdd7s1kt2VjkgsCERM6zMscwWEnTnj21a9X39n6a",
  "key47": "aFaiDC9j2BpDNtmX8CYJ3Hnga5objX2iz2EKhkqWeHkyyuFfUsX8Mo8SCiA9RxUwbumrFtr2KqV9zzfRLVcJvyg"
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
