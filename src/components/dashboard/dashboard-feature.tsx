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
    "3MYuk83ZaiaUAtKULcfaUFjZmjFN9anuspZYfqrs91auetkzFQZa8SyGiSZNMHzP4gE9XnsJdyXBCvBhC45jsXKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DTDrxmH1hHy2GfUPzkcwWhyA6bSXNGRtsz6djSpa1YtDkT55BvYuYUKDLTpgFnNVTs2RnHmnoyc9XM5rUgvbrDh",
  "key1": "5aF7Pepi4fr5h5rK3FibKBd6Ysz8u3phVcxzRTb25G9komhSRvTf2HaCLrHvyZ5J54fLP4HMQfpB9i6oNa8d9usu",
  "key2": "3TARXJUZyUREHc618AjApf81iWPKvNULUp2ypXhHJUa64GknWv3dGthddq4yKp6XspvBa8CSDCuc6F7yLJttuQEx",
  "key3": "5CLqR3wRKRK2yDePVJ46pVoEt45ge739C7hiMEb8yACcjAu8LcGLe8BY4nN24rF2j2XX2sRkvLiS7y98RccS7zQC",
  "key4": "vz3uGH5tyaE9PTR38owFREADPfZSroi8exYUUtvvDNbR87VvyPfXE75ENsNrkgShyMjipcFPZfH7P7piiW5mutV",
  "key5": "4RfJbonSRWcnkcP1YRye1oaPKQvJA7XRdzw4Qoi3dVb5guYoBTah48EbrqJnuGqsGV89eezLUmALY41Gbd4a8H4w",
  "key6": "5uCjVfn5DEJjEYtiK5m1LQ55fTxcykMfpF9gdtg1Qm9j4656vdDu6ArmUinYZQcQ9yTWPoKzgywFdPRxm14Z6LVM",
  "key7": "65LnmorXcQbZ7k3KiF8qTgV7mj6TBFi3ixAwvGXoWpmtEpeuso8aLVzgJxevSHTHHitBCmH9XvsAwSkESpuGaG6V",
  "key8": "497USnND1tadpGex1QMwRod2xemAc79FnuwJ6FS1un7tEQEywP6iEQDdBxy9LFyCDoEbdpEB3fXBKqSQDkt1J17r",
  "key9": "4a28qQAytCzWTnhXpzZLYceg57Y4fftAyDfy1E4fZJitPkyFTaExvQtc3hYJMZYb8vDCNoxbtPoxhP5qT3Y3MriK",
  "key10": "3kWU5cT42NkVgXqABQ5VrVanfREacHHrQiYhjXn6EMo8m8uz44A2bhyWCobxA23TbDwpmafHNraohEqUMU7EKc8Y",
  "key11": "3r7fEsR8vMHj7zZZFMVeZDyBtuUKTq8ePA9AZ5JJoQ6PdyRNj9uyFHustBDYSfckqjRTLPVKz5VPDQDcuq33MTds",
  "key12": "4e2Rxqr1S3kmF4VoMDtTUmRJuBWo4w69YMXZWCNpJFLY3RcsTuomqoL57aQZ8KRwKVgDZzYQEYMbQVqfzNPLQc9T",
  "key13": "2fS1fvHDiFZN7MXheC6xQrG2qZwQFiUk36a6aoGoX8hN78SzuyqdfUdwyRXQ35ibus325o3K3PLR3hSoK3Lnb6Sq",
  "key14": "2QFfXyVk3xoGzzEfqi62S3C2wbbJXtZpMqxxU9EqE8cew2UZp96kYzqZ63L1X6oevMVmzhcnvX2GjD5aTeo9nMmr",
  "key15": "4gdBpan1tJWhbFLvLyJfYAYksezRk6S51G9s1zB47XXwPquxpc7Cngyi6AJksDZhxmhZgquw6T96YoDEJCH3PRd5",
  "key16": "3CgGQwCWYoTHGPKjUGVwk3iCabUAKBgDiUM4j2GdzFnDQH2JNKhSKPmGmtXsXWEVMwu8FchpApyQ4pb98DiMoZ6g",
  "key17": "aDopvZ45iirwcSqytbBhwSmcu77dvSFMMDa5S7tWRJ4NKrSQ7hd8Ye6emmnYNtR8cgfg1ZVS4GENkWDZBRfr4bn",
  "key18": "thUwxKiJrAe6oGJ99RjrtzsQUiDzL96wPUSFqH1w4dXi5QF2ZxbTSEhyE6cbkdAnWHsdbXCKWWuekEtKEFHnJfa",
  "key19": "WtRgH1dqQpArKHSUbFG6aykzW51wobvQwpheo1T26EBTWk3GzwYZ6wEi7DoGoXcHT1WdAFqCrcE8bK9WrTJ1ipM",
  "key20": "p2p1HpqQ7FHXJtyJYmPUxGCco5Cbr51K7KDncZQFFdKuPAC5e4WjjZUUoBcFTNMSKvZc1uqxRvmQgjS76zEoaon",
  "key21": "41MdVTcFEp935kLXAVhvaKGd5NkUD5qUwCfsdgfKJA9ZtNm1GgwjEm5XYY83QVyFFnvYTpKPAvEyrAQsoQVmBaBM",
  "key22": "5uXsr8pLyNjYQSh3VKf9UPTqwwcgLRBn5xv6dJi4cBC9ELyVGTnixDuwfWLvKP4QyTPKPYgLDRYeq4NYdsd4qVkG",
  "key23": "2LGwrCYLSnM4bgkGykJtCt1Fy5A6qB7Tm5h4rDrDtzdv4McHammmEwk5K1JQTqBVCDr4KMBnCNJLVtvsMvYQpaLn",
  "key24": "2czLFeDcccL7fRJdEovXGpP1FxJ1ZknVVyZpe5eLrGikhL2Rmtv9YYxFbB43V4FvX5LocBaSrwem6taKNRFqpFRK",
  "key25": "3AJRAZf7LgfFymJYpeoP9gCgY79ywQzjMxBwRiDSrTtWVLsWY8xgvEyM7HvTK4fMitNqX87tYJ1QwbX2dsCFYJa9",
  "key26": "5KRaExCmcs2wMAcTEP4sCNCPa9NnRr4Hrnq3bxaicwHUNQy3YgyrcwmWLFCjihAcRMUDY3Xi2yzUCQEWY1AxBknA",
  "key27": "2dwzXhvTa94o8ffyr4CWmt2fcmouABF2vP1ALuFCGBcyi6zSfsJnUjkuw4ckFNoBWHcBY1EyV2nVn5UvMajTJrcv",
  "key28": "218V8CELpXpXvc6B6h3Yq7JXkaHVC5E9JNPSquwKDhrDNszTX3MMkEHM7adxvgWPr6memTNrpgvr6Jmw3DRTtdqq"
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
