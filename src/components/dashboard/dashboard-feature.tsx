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
    "5dhrK6ngtvr2dpZZkQE6q6b5EeecAUMnMHT6kdeyR6B5E9TE6oDzJFQ8zGxWXPiuB3zNhYnQZoc1sH4ncZuu5NZx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34mfm8L7qTwDYirNXv5znZ6X9qaddzPzTMWtfvqyq8FUDMdPCriPQX3eA4Z1r7dt2tpDy6UUj8kJBw2dkowVfeye",
  "key1": "2R7za5ypwkFLKotp3dLWPyjbmSBx8Raq82Ez7WKAtBDGc6akodAg1gg4iycoDC11Uj7XtJJ9XK6cFQU25gW22iSH",
  "key2": "8x71umFWzq9KGxcHrLb67ybeEHAZ4VTUysb2QAz7iJs5rki5PKjVc8c2qc6unKDvyn5x24BCkARRZjtu5iwifHj",
  "key3": "41Msk8pDASht9hnmkxj3imigNgJgpBWqCi8rFdqPVSFnm8dtWkGZfewKCm17uJPAdNsJCgJWcSdG4imXHH9R8Syh",
  "key4": "287EmWANACH5eUFSAtJE44Yvy7u57nRUTJexSgRayRB1xhk4uphpq8a4axCpmjDpGUGP3yLzERE5ZzaEQodZXGmg",
  "key5": "5JkDiVNeUw4La1hjSUYjkbBB88TzXg6Mpv8D9vYhxAUHNLLssgZV2NCtozpzHkKWVFjhCmgLQXRrickD61462gyx",
  "key6": "3bwKPSc7JVz8FXDhS9MUqRguuAA7YpnxnfH1vo7AxsVRyKjwqcZHZBFuXihVm8d5RGqEBv94uQqKpL3aafDat58m",
  "key7": "2zLvfhRFsEPkGMCpzWqp4Mmcy4gRP2rbE4se1uCF22pfVGLe3TC9rMsrCf9hpZSUavo6rnedkFGp7tFihtjjTKY9",
  "key8": "gwAdSbcPukN9Q3HnFLbZUvMVccpFpB2EdoFp66XLvm38DjMuTgPgmdjWxzAzCsjm7GPKDqMRsBBijfqmtEYETX2",
  "key9": "GJWf1j2afMVDViuemqYQy1nknE12NefXJg7NPuPn4aGiAMHqfJ45TUVVzPK8RAWfrNqBfpK4UAXpPp8spyL6taE",
  "key10": "4UckNPogbZxoBjLTcnZdY8VnJv9m5wj5upUtvuBLKCPPJfqfckpDTrnuJBM4QKSi6f7nNGVnW79bPhATyBunwyEy",
  "key11": "3W7UxRNnTbbK2Jx8Ch9oAywmHvQiS1QJA5JUyf5492RdKmLPnq1iLeSuu6CkyhCA5uUNdN1qArTLo8iF5DHoocb4",
  "key12": "3Cpa2StoZGcawvU72179SkGvePFvkREsHVfEFf7Kwk5w16edB5XfNuhDRBxjFMvCcKhxUi6DDCajrewf5GhqXwy6",
  "key13": "5i724XF4WczMrKC32iPZ6gfePJhcn7Wa1EE5feLh4YEFJU2gRPGCqj2UDEJ1KX8Aus3v2LPTyqEXtRszfmp5YHnQ",
  "key14": "Bb5TDZamLe9K7MDPQs2x7h5A3Ds4Z8KfaPvrRBFdUthqcizH6X8orsjtVpYcMbWiNBF2uWUj2NW2UDDYE99oPzm",
  "key15": "3inAWqYFZKLxymBBh85i7n612hm47wN2wTyt2dEhFDHJEXq4LHzhXSFSFBK6qDXB8D9DPTfLg8wGzEGbwaJvENy9",
  "key16": "2vojcwVYRaxkvTfrgFRHm1AFWihCHA2jamX7WT9UR856yxpNzjLwvfFaZBjRWLqf3F7oMaZa8a4w2GWpfPg9SCKp",
  "key17": "2ufR3QTZmo9zAnX2WBvzDasiNFahzuTDcu9tw9W5DBfE3rra8YK6KRZt4HqHF5kb4ZBp6kxg5iAUmUvV5RNxAqC8",
  "key18": "33gwmuE9VBmiYxAziqxSeRyGtgKRqcZ6nbCjLPpXj1tFxdHuLY2uTmGdDTV6XC2j6XsFRpfU1bRiYacoAiKC2cUC",
  "key19": "4ccXmmkd4UCuqGQf3bw91TTTb6aGmRgBQyBkmmw5v4NZRLUASW6v75ijGdvGJpUi4G7gWjcZVRryWAiQ7CuKcSnX",
  "key20": "4DsdDKYjBBod6GPn2JgMkESmeUwwmS3tqXu2mPEjjQBJz33ADz5MrWVgJEuvT1bsTe8uqbGNFsJiiy75bmSRJQg5",
  "key21": "5pxXYRSPmv8RAoTHYy8sm9NrYWM7HdUie9VfQ5BCqC3acEE33wZMjiZmjrbmpVGb6wGdGGeSzR4sFWsz8RSTKLSv",
  "key22": "4DK8aNGipAia36M2wspYKdcKuTbtfUEHNVCLGsaX6GQrLRtKFEB2bgvGn3VyQhCyhBpdJc7jtfv767Qjy5EukKHH",
  "key23": "526CSbo6TLvghiMTkXKxy18uh23BvRc1geNxsUYgZgthzMG3ef1wBoLdSvF2VsaqngZheSbnVyx1tDT9S3dGdCQ9",
  "key24": "Ltw5z84fRXWGN7PeqHz4MCxXzn3AC2vjZZ4vDrLHiGrLxYBQttbVTasi4erz9fpj24weCMNcEhk6fzsiq5Mt6iA",
  "key25": "3A7J99jFKXY7xt427f7F2EEQghoZ8bmE7dn1djNHpDgUv1Ks5c5qwfxw5LkZkmswCP9qTLE28qEk1se5FsnJd26B",
  "key26": "iieTDb57kdb7SqNQSpjbQ5Tq11iGrqwdvBrCWJ4BdTjX1reY1iT6Lo15PccSK2WkV6GTmhQ2wiGJPmJDWtNED2z",
  "key27": "2cUFMhYbMyhCUVHEqRc8MeUozGWAJb7XpKSQtUsGvGGv5mLm6eQVqWuyP1TfbDu3sjyQ3FhqAkaKDAQenXho645M",
  "key28": "5RDbfeZKEbvg7EE91j7S1n86yHeUsr8NwMpQjEeBNbFbo3LLoE7aVBtCWBaNyks714vhG1Zew7sxduA1QnGfC4Ff",
  "key29": "2cM6fgk7tcYLLgtbPQYVdi6Fds2rjNr1KQCW9qvJwew6ZwNCApiQYoWWFo4R5343BWQNnYV4rtS87GhcLPy1cQmD",
  "key30": "2jsLzareuctYchG5PZ6RGjKHCK1RVFxWqRxBGbbMHSxjGXPA7V8beLsLHsjzrphpK56zDFy9U9gEaA4tVRbpgPoc",
  "key31": "bFpe8MVNrRooNdrYNKpkGtfuj93VcptK18oiwcCfJSFoVgyasMNDtkKMdcjupfpLgMURB61WEw6j2F7BgMnb5x3",
  "key32": "5drgW6wEYBxcNqGZdpYY52EA8RfznYiEgtYfYavexJkz5CWBKimeh5CHv2E2PKdtmCJ7ASRB132rsnYpT52YEh6v",
  "key33": "2C6Qz4eg4pm9RdugWaUbrmZAKLKxy583GkihrHsQfwzYmj5NKwnWMzhSnLkv2f7GAZitJ8AT7jhG2BpD2oXBAkkQ",
  "key34": "Jidzm9kKmFjtAee8Vodpy6W5vVhD7bM6tYpNfLNSXft5qe7G83L5ZafRReTUxjwuHNakjqeLrSYWuboEDPdkyg4"
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
