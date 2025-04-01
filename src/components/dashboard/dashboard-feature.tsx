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
    "3fjP5ConfTbjD4MRzyG9JcdYmwFLwnEAtJJQEyKNXbDjJLBXyPWHd1LjXRJdXqWk3vqZmEkUvnasC1Qz82tU32Mu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oY5KETCoQPwDC3a6sfDosofsWjXZ79xAzZDUcT37Fdi3zwsAiiLfrLbLvyNJhBz3DKJRNEi61BSDooyMxoRxJQi",
  "key1": "2pV7wtumxwv9c24M737jjk5UEmPFa8xWUyL2LQnc8wtKJXvKHfKqSPkudoLmDxLDqXQ93KeYacKxsoMppFSDxWgv",
  "key2": "jJTRXf9nYwWLzvA8gioXLJaLBup3uCqngdF2KFxydR5H8AKeQhPRB1e1aYpcpZwj9S44nFcErf4TssqZ8QcTwju",
  "key3": "3BddCfVbvF2ngNwtBsJqnrYAUKkYZNaTj2CAX2jxnfScUGJggcZRvbsEH9fRiETTvaAZYWJAaibjFYkFFpd2wDG9",
  "key4": "2CzcNt5mCwbcHQjesjUCQk2F6HtzFkiZV4e1ujWBdMey4qMYYYfqk92ADgLYVcAyPFcaV9ubpGdeSEwaVMpMRR96",
  "key5": "4RDD1SkkqWVHdpKbRbdSjWQWYyWjPiUUoDJhid69XpCAK3vT2X5CX1LaDciLpDiT3wvX1T4YBefwVP8Cx2gNZg67",
  "key6": "397hkzPCtpt9jV7QryD6YuzJHZ8kkEnJKmbdzLqEHmKEuaZDaj2ejRshcRd14qr7wLAxkKkQxupMJ9AeQubfJ164",
  "key7": "EVHP6r4j38fHv3VrPXisnbAZkwojVfm2cbgYn9jrkHXwF42cBcEffk7BDmVkxwQAuWdPYtJDytRQ64nEV1pxagM",
  "key8": "4eMjkRfcTwjtKX8xJ2w8XWWQNMNSMEkp9Ucpna4xXuhJSXmmsr2MDWzCU2kEJmcXgjTvADpaH3qx3Sd1hRXoyn7a",
  "key9": "5PdytVUJ6ciwXJzgdMguE41LrC7Ue4KpFBJAU3Gk7fU58XuqyaP8Pw9ExrnNvDUaXeenKoWX8bSq6sFj9yrvqXn",
  "key10": "5TeiXXP3feN6ayUQJnjAzAiY9iiNF5A73u3wAsrBwHRtTCiayP8GyXh2FTx6GW7SEe2qY4Ypn7hKnkcKPa2rxtcV",
  "key11": "3s7Q5vEMc6fixSyC7p5YuWZMvPKxL1woDRZDVpf1e9k9LoNEWX3gwcBgFMsUGjkeVGjPtF1xo1MsgcHpC4vsQQFw",
  "key12": "3wAdwe2DBM2GRPQrgHpJ87xn6X4bUrGQBprpH8kwUSNQ1P7sauYfhERKAhLGMfxfUcJCpZ2fhwBoCMyuuqUyoP7D",
  "key13": "45RZmmPYWLoHT3YRvQyp1V795xgczqqBpmpK9ChFFFPwWM2BJEHoH8mTvaA1Kpvwr3J74vh2koDTEu9m7qnED5ex",
  "key14": "1MGzxmbwUjvLaarao9xJisb8FLsw5fD5HWsaq4PpvbByNLjrfW3LshJwggSQjGBwQ8yzSDNFxLxzowvzyeHqswJ",
  "key15": "4494byMavJTQxdB1kLx1UWqj3xdCKbNjQxki3YMdcy3pGnDnkxGPrWa61RERMwm8mYq1Z2ZMyg15Npkxp7JRrX4u",
  "key16": "5hrJSomtAhWvVmnNqtT42gezSyHZ7vE8pcJp51fzNuBnpKFeuPEv62YhohtHJbE9QJUKwVaeiP9xP8VJoGdwACsD",
  "key17": "4g7DgQdXWi6skawP5ABhbo2US3ReC7MdKtjx8e11uiTyPLEh7L6r12jQnVRcjwYSY7zSJbGKdU4hcqeEkuX792va",
  "key18": "3Tkp6AyFUbjhFGpkqCYorEsMv9jDQmG6FgUDfPBucR4F1vbK8bJYz8d38CF3UhTXQpoucJJezxMUaaJNYuhoErAq",
  "key19": "4NccKumDiMZsTF2YPeTDekb2hju5my3RxjUpEga7F49RJs59fiDq2a7p1QQXtbBwc3xNh8TUpjXNYciog75EzkWc",
  "key20": "JJX1dMw7x1Bdh9GLcbQtCSQGsV9xV9iJ387oBqADqsn42gVhiqM3nsJybuLgqCz3LWQkn1R9ynsCf6E6ZQY2Lcz",
  "key21": "4thpQmypyAwPcVTPPQiNKcQr7aZfiMkjEPFfaBamh37A4UnjmqWiM8oX3g4DxNfnQtCgBntP2oRybj27kCEB5Ucv",
  "key22": "3ytsmqu9efM1wygoQ6Fep2CEA8jJreRzf6cd12ZSNSM52CZBSxxFUnpcdWVDmEpyau5WYaXEN3zvtw29bfKL9gg",
  "key23": "1WPmBGq4rPXMa61C3a7XZMqt7uw6eLew2dV3atQRR8VBJFasy5hYZeCJFoN8jBmfSN8w9wy4WENKXCvggQDpzPY",
  "key24": "CWvNf4v4gzpJDYRb1SJkJWTbTQxs1F95bULBw9wwwcpfqRK8qXKtquDTnPz3x9HUzgh2oBR95qXcFahpEZ1cHny",
  "key25": "5Xfd2EmvkobiY1cTNtX4UjGUqcptnTJpTMfuLPAp3XSLrRXLs74BQwkoHEHkYZKw45qcCkz9mqKo7mL3aV5CVzWG",
  "key26": "2eUtdSvDN9Dd8HTY6YFyrjawxdK3Vpjr84MwLsCDgCG2ZyvbSwP78xe9SvuQ7P1Sf6L7pUhruRHBzCJV9NJetw3W",
  "key27": "3XvftoTGoBqwCJwveQfttoJk9iF3Wo5Vr6iSiKNiF4BuaDiSsEtvrxpW2i7piMmy7Lu86tEgC9pxUaKYe7PdEeKa",
  "key28": "5af898dnD1uVgZrfWAsNe2UCLve5uD55uyjoPtJMWMpX9Rfn5DCAHpSCorHyYX3S2bWNLxvXqbiPypgXfL97u2ew",
  "key29": "vhzXFLHP4c95nBkeLP2Z7GRKGEsJRfG2e5WXDvGwmyou6uQbS7thnNDTxkiBqDPkZhqvAT3vnVdH1d2rrCyJyxQ",
  "key30": "3ajR11i64h1WXcz5FCWMPWB4YKjkynA2AvwcnxYKKbTDxUJ6djXFBvYJEMzg94thyA6EqSLJgEU4HVxdc5wKqXk2",
  "key31": "3TC45VmFnJu3xMNWvRRHa1FYRv8Ft9RYuJHaXfm91BMC5u6nyzSWGPQE7KXqxXzedwK2nd6WM6StJQGVYXuwiRxS"
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
