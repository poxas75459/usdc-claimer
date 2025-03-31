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
    "4PM6SD7H2zjfNg2QwDg58Ltg5r3j5XxobN1GLbqvwjMJ2PqNpKjfqeFZ7SaS8swi4gQcMEf8tFNbqhjHWJvV2DKH"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2DpstU31UNs64B8m99mmyXY2deEKwC4mphQiWHLt72SLw8s8CiaVax74vGneB4xCUnXtptUvWBM2qWjuGF1W4AEp",
  "decoyKey1": "52hvckCJQL8YnxVodULCNw5XuhyfH5WUWziBdJBsL3K83Yz3uRj1E3pDdDDNFBgkMhmbTVjvMmPys4EZzj5A7A5H",
  "decoyKey2": "42UrHV6PtH1zo1zpFqum12PQYxjuoUd3BjfQmQqaVsTqqscmoG2DYsyX93XNsPrZSxUgQ4vSZ3wysq3sbsBGYk95",
  "decoyKey3": "5FdhgUJ1YFmiR3arKeZwSkBZ8pnDY9LYysP5N6VgdakifoZ5pPDMiUGwgT7wjAgwgr4vJ3gorxCHYL7JpwfuBhpG",
  "decoyKey4": "2h2nRKKh7fgTgRstZEXsQiAuarHatfkGM6b31RqjWtJsgA5UhWmBHeeaQnhRPLoV59sWhUp1RXCshm4mfY6iJrpM",
  "decoyKey5": "2RzJ6HmZPVSwHC1EPz7Dgz7uCCnnGiGeTpSmq5jEpYQVMaWwgMFAnCu9LmaYZiXtjQohUtdcCx3Lj7jqFEjLuXmd",
  "decoyKey6": "2abkwfK5RqbXZU3xPefb5VRuJc11SKPr5rNYUVREScucCnH4ntxLc1MpjxAUgWBEaEFt6FeZjQDJbddGZHrAqecQ",
  "decoyKey7": "2oXkf5pDUMBU3Lmb8PTokrpbjZBStxLAMviVfzLB2d86LML4KLruFBQhBbGsuKTd8yBuXMxTSEbPMSrHyMH1hHrw",
  "decoyKey8": "2v3rxhBr9E1EpxYYb6AZBdSifZTTxQX1xLuqjPE9VLGfoMPsU2iJaKLo4JTY4mJK83xw6Ui1bWfGdQk4b26zYdwc",
  "decoyKey9": "2M1Jr2JUBRDEMo7NrzbnCiWXAvCC8wrAv5R1GoVS2Qc7qexu7uydjHbm148JzmFaeHppxxDWvmtS65e7x2ben1z6",
  "decoyKey10": "3pvJ9tKR6NAqjLiTPuRQmfEw27kDwu7Smb78eMUAj36ehCK95hWQZSJGoPytK8G1KvdGYcjJNBPMMRAUMGNmw4T5",
  "decoyKey11": "HcCyhHK2bG7SWhpA29i2UDkTzvEALy7mxd1qKz1YaptLtPAt24dNQ1Rw4JS2W86zSvGCsQvgBrrBmtKM58uKmaQ",
  "decoyKey12": "4TTHeVJkfJiEqhdRdUaZdQfAwFEH4QY3Lmw1Jw5NWXVja9rvoPQDRwLboqfg3f26tBE6RHMSNFTbk5WCApv3JkHz",
  "decoyKey13": "4ybqiFKcof2u3MswoUWzf3NyJVYKRxni7x9GBWrRRT9YPtPGLvt2xKGMiTUZQm92U4w6ECoaCgPBY71uTDHirDTQ",
  "decoyKey14": "3k2KHC66Hceb6GnVQVLt1dBAseUmtZnPcceSb9vRiZdnXviEeQpiy1ZXY3v48MYkxvmdtCSugnhfGw1JPi99QGcN",
  "decoyKey15": "4fpKKw1CwyXQEoAoRT5sDDQCGRqoSQs5aLQ45BxWrLgwW3dYpVqgmFJTXk5oSGzFbWUeco82jkXYXwCaujshgHGG",
  "decoyKey16": "5iDCdWPEU9eyo44tJcnXL9AU2Y8HaZ9LU9fUSEpPg7rpJrDLLQG1rh3vKeQm3hWx7eMqoLZv4ryVvXEefwYE3Ape",
  "decoyKey17": "2HJ5J3MvxQkkpE2kVR6iA5dUw43YsebZpFZCFimDkMA9Mhni3rQ3TKhqBCZDpZhtSBDLGQHvAgxcQ8g6i6rReFkT",
  "decoyKey18": "2oFaPhBax2dxEBdK2roTCFh4nqWXqhWJ78rAU7Rmznu8LjEwmgKBbKNV8VCMrhcjqBJbvn8HqLN7AfupgmVnBrEE",
  "decoyKey19": "2XzRAQnnR2cQbV6McRK1eCyWfxvW4MkyU6csZ6CmvpjpFa2NizVVwNFMm1kgnfQTnCjF8ATsnrWzErVkRPV3uJWf",
  "decoyKey20": "3GboAHNWkkR6Gs2WxEgGTSLwaSoeNsKGr4n2mcs2g9budcJLjfjyzCecbij4FmTMUWpfYFgkC44wwiawXUBZFoDN",
  "decoyKey21": "5E24SsYcdaLmUiwEKzVHArdPSDS5UzCUjAQLZxWxpoEegy23Ers4vmkJC97Ko858xjdQKt2HKTLf61CvvSg7gXwr",
  "decoyKey22": "5n1EdCDr3n6ezjeRzBjDc5hG3tDdbps5e4EQRzC9bD38TuHLTp2QZM27PpjCZnupD8JDKzRDQQDgn5b2ngSJTjwh",
  "decoyKey23": "4TettV1viELxwA2ykU18Ef6bniuzMiJBNA1MS1FYox1qKQREL3aQYWRGTpEgYHJoFP3AgYQe1nnMknXxpsvcmBUc",
  "decoyKey24": "Sjg9jMMxR1oaztJShbQ4fTMbf9S7Pfc89jwamP3QvdWCqYZLX8F4g97rDDG2D6bdoA8xav2Q7guHEmjPF5dfYJg",
  "decoyKey25": "2EdupYkuzsybTRTLDg4G1vyzvR4jcYmSuQ5WdUJQjjGUpk5sv22d4gGMoZKHKRPydfYGYfUzwggEE3CYhQb3h8xT",
  "decoyKey26": "5BqTzKX9DVWjpjCMYa4XXSfmFbMQKt1MfHmEV8mk6QtZPLXS83FySHnyHpa9Hf3iKp5vf84aSJbjDFu4TSTx92qY",
  "decoyKey27": "B7WboVpxRkWBwVeU47ifeyZs8Gi5zLxwzMDE56pAXbcp3WF18bogZu7LFwmXEJ9C1HEqJny7PP8SnihfHfb3dGT",
  "decoyKey28": "2tn18NeoPd7bcZXNK8iqtCyAN47vCXWHzpG12Cz8zE2c8naRHrSw2JonKyGaffBMspNgKfzHyroqzSBqN2schVfU",
  "decoyKey29": "3757nk5DrNrMBfEH1euBUrE6Rsxf4YrcsnWf3AyiZQgr8kbUecLgedKChTmX6bR4zQ8xzEu1nK6Ju8KpQEL4UceW",
  "decoyKey30": "3bQSp7TNiQ5ygCibWywTK7JZPj1E6tSE1jZT3G9CD6CjSG1DNWaYT2v3ps4XG3BrZwKTDbRrXdhtFYifNTDhVMiS",
  "decoyKey31": "2HS96YJ4fzmsKiKnBDYDxS6wKZGF2Pp6pAfA98GVkFhPaTFjUADWZ3AxkqYkDrykuYuR5XA8LhaVsRCbc4ki4kw4",
  "decoyKey32": "9amPhG5uYSqGY8zvNDNLp7sZbw6wsZFvyMsMK4LvBWkqfhHkmaTXtPA32i1XEn1FcTtyvApWSWHh6uYNJNimby3",
  "decoyKey33": "3MZj6oSnrga8kY13kyixWzxDeQeoDntBn6n1KrL4hZAhJp4nDKExgyACSY1Z7f2cee9LLNGyuhQ3QVKBnyWjFvXo",
  "decoyKey34": "5JNR3X2SKzUsHCLiALirqhQUX2AN4NA9soSKzy8daGZnqGYB5GJSFMj7e3BAdMKkDA5Zm653kgnZVpShjqsLAmLh",
  "decoyKey35": "2E3Md3GKUBNGA59FWRDw3FGEs2Y8iaiFbX2iZXShcHAFvNGutftGNQ2cPS24rveZysDii81Ytm9FEU5iRhgEwdxy",
  "decoyKey36": "57Qb447BdxcLwPcUwWiK4HLHjYfB1hLkoYyFHWLfPRnB5pobi5vvHXToq9z7EGwyYN6M1weRzJcoFMohiLaub2UF",
  "decoyKey37": "2yTmAY5JWZzZsK6b9LZVcvk22TnngMxgtcp4MYwE6W2DF9DxvM8ibrgP6y5oMg7aZWHH1irAZPadxuug8rRDTUaD",
  "decoyKey38": "4ZMenKSVByr1RQDs51xp6Bd7AtCyobE2kCVwMtbb4QVojvmpG3Vu4wXM6LC9ZG6VDUNmzprjCauygNeFfRUyrCzF",
  "decoyKey39": "3xoHiDH6q16gb91jHQHXqWcGhxiD3cvmqhmKTwrt83qEKZM46BYfc7frmMzqPtHrFfgCDuipb4Sp9MSYMqoaah1N",
  "decoyKey40": "Pfy7miKmM1Uc2HNfSjC4kp6THqKQuHfTLh6cyLTB6HCpQKcz34fWx3H9c8ZFgwXAjJPbTcJdYabjGo1fvgW4wc1",
  "decoyKey41": "3jo2q6yBwQFKyucLBm7mVvSsj5qAxQXFCz6Racn3yqKYgpWSuGP4ba8kDd8YBA5CjZcty9jXh7mYzoGsbbEYgLPQ",
  "decoyKey42": "62yRscnfmjsUDy6ASBNQ2fQtJPwAGqtZhxiwRGNnfULAnrs8JaNrxMaSkZu7wcwNWizofT2Jag2PDrytNyaoaeH9",
  "decoyKey43": "4Wj1WvTyXYFGGRBeSTeu6uFUPRDGbZqkSNafW6NaFG9Voyc5LGfoYioN4gNvwYjtq67NqP8nzD6QRxpo5QvTdmDQ",
  "decoyKey44": "3KW3Zb3QULBCmK3R2Aeg5vTUeegMrtnFAuGHMkSmuvXjRLc3UFnjpsNBDPYG8mY7PAivegfWdQ7tFmzCvvoLKkmR",
  "decoyKey45": "3hT1Wm3Gjzy98gYSgjEP9MdhUCLk65EDoLScZsFGMoc9KUegbeT83p11wd19rCopqMVxVmjUzYXFEsLrZqaSujXC",
  "decoyKey46": "38tDXzoxd5iEEA4D8vL8iqfSTUwZmy8j1GHMK8XwYBYHdcDk2WdKd6fwbRBcWAzNnZD46LFNf27RU2v2t7FNvmuB",
  "decoyKey47": "3QzCkUgCoSbAfzjn2jgCn98N4riaWNSvXYSf4msVMejpJ4Kyk7EHTfXnhRpwPjYqUt6U6MQx7tB21PF9GdVZqxQw",
  "decoyKey48": "5SSe7DLQjvbJXN6b9kpAnq35bbpyYQHFcWfWPwtg6HSAESjApopUAHFWp2sdVsHrf3iev65ePNjFY6yJW929GFUp",
  "decoyKey49": "4sBh8f8Edgtjo6RcFSvp3GcpefzYugzwtmKHkrj8Hm9ADc5XDAinyPnJ5s4ukPM5k2Db7A5ZBg4qmCGiePD6CaYe"
};
// DECOY_KEYS_END
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