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
    "127iVdEWSbC4Zv45uNgXs4gxnarWmqZ1eDtegkQFpNnCpJuoaAKgm6hKus9u8vxN5sbMmawiazMB9DtBrL2hN4xa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H9sFzxtxwq3fWNZLnfPhnWgvoFdCTxGa18JoLx3eqKGwGX8qXxrXa3jdeuXjeDcHW7iniRLjGNTCy1oX9cRk6E7",
  "key1": "BGpoMSWrFBCZUJGBprrcCEiMFaiKE9bSxi2afc45Gn5hB3Z6fDnCq4Wmfc7p9u3WqdxBXUkW8Ygay8FWbHKUz4w",
  "key2": "2uYBrto21Yq2hbATEpLTkAbZwmTZXikGRFXeVcAwg3rSpHp4S8nMw5aYBHozRMmq2UarFafmTisYkUfJqdboLryF",
  "key3": "629m7tMQYTGfBvircQMrn8vY85oMqYKj4uVRnubTsWHKpKG2xJx4VX3eqaEePkiKcWf4wFzX2w3nvVeDBpWsZiVm",
  "key4": "87eRiqYT8FF3BCR5t6VR1wzi6nNGLC9mvE8hqvf9KXEbr4PF8wgVxpbXvPFLSTfVv4Huxe5XWwoL4BCnN9vETtT",
  "key5": "4VbYijrKXvctiR7XWJnkoercUyPqaqWxVXZgH4XhENP64e5eEXw9co9LYCrYutbaWZwFvktepZg2ww4aH592p2oQ",
  "key6": "32y18J3J3wPrnhsjGn55tn7v1ubC26Tdn3EkEEdrfedfucbxUQ6BQUaeBhd81RK8HXWKZ3cHZd9GgxjGyUbnYCBp",
  "key7": "2U89WxX9g45maHE5zqgntxSPfgSMRCZhNAwrE2pqj7YyD9D6P8hRbWZ7dgYGkD8b3ZKbHAEXchy53WijFCxHNNTm",
  "key8": "NkWK9TMYwovTjiMi8ixkcF8F99Dii4AhPnVn1SMQX8HrRQt5BUcUwPAeABNQzED5ShZ1ZAyUGSwUNgD1rHKAhRr",
  "key9": "2sPyCPsRVEVCKN939HaKP7QZS9xERpA2tEjPQM21JobAAMCZjABz3hpk8HafB9E8wECpAXVRvJSbCrqHpprzcqHA",
  "key10": "5KAJ1s5bFHgavDkizjUcf6DxFEc9ALVTSknN3i7hNJQzdNfswBnEyF8BN4xFidqHSTkuwZcnsDYb2b4UcxVVYKUn",
  "key11": "418LUyXJBeCzdEUAKTaqRc7BbUwkqBXSUom9YqfW7huTiQvLN3i6fYHSjbUaN7RCzdKesWJPPtJW1uRwdw8AgDEg",
  "key12": "4jrXAFmfC5F2pV5DLofZmV78iVCiHWy8kT2yLkWiZHcLUA1q5k2H3h65q5HeWYe7NhG7A2nk6bconGHMS1fGPQUT",
  "key13": "4sbkfCSCDM1PfazNXVYGgsCyAfxZUezTi4oAJhV54anFiAyDHGJkqZ4ZYuBc9xVYXWg287T3a14jNLtrsWfdU3BR",
  "key14": "2d4bB22p55tpaExgGV3GSCnDjUrgoegebFcbxTFacuGxqUYbH9CVRAzDwjmNyuiuL5nPxeLLuQERAViAnKt8BJJq",
  "key15": "5rjAzeNGJnCcKrewNHXHgmGQitSVuejhFFerv2AHJp5iduo87ER2p1nmgWu8x6QbSyY8tkfiFFEX7GdTmniQeLVJ",
  "key16": "5iwkU7oDckRHbLswjxVAEQ5GFws8Gwt3CnRguMciQVUZ178x99fMaXxtcRdEkxQ1p5G1jdyPVARKALsrLoEeH5xD",
  "key17": "3WHNSyZvCuVMSvB5GUurHW1zgVH2rUvmW1ZWeogHfNTM6kkQ1cQTrobmpMeReGWvaL6reM2akZRiFyGG8NBWe4P8",
  "key18": "3j3UEUDHs8RKNX3Ewmv2jWXg1sarPCDjgcRWmxao5mjYEtn6Yb6oZDHoyis5qDjH12HF3XD1VuKyui9FdkdpEyTg",
  "key19": "Heftq5Cemkn6hoKcpFcjsN9jBAih3mZ7uCSzTxHpLWtQv9WhfKJVT6FgfvSSKqfSvLRNFhypSpYhfhoXEWy5DBP",
  "key20": "3A4rhNj2tR7GVugetrcRuR2YcG5yQeA558STnvZc2AreUkQxuJEsfZUAV28vhdnSm6f7NvygF6ey6YD6dSeVB8Q6",
  "key21": "5F6rnaWaSYsERa2ENKYsq4n5Q2Uv8xN54TZK6q3xAvz9gpJkW3h8bSTZPocY6YK18dsq3QHshyxxyZoQXKpQNwUQ",
  "key22": "2DTf2mh35sT5vtYBHZWUaAqLvaiV7s2MRV42nzrwMRmw4o2U8rAp1Y7ifat3pDM9fPvqQcYDT4tpUrPFcBrjXJky",
  "key23": "37B36i8eVd5qFhsCmBJrr2ceRbfncA433eACYe5Z4myYWvYh2au2WRxa4k6eZtUSNWbZkbowFZRofh2sXLqYSbM8",
  "key24": "4PTUbgEWh1mRwzkp7T712L9vjMPvMRbGNUuk4SW3izkPPYaMgo4zheNNNpgfSFbgeAv2AoC3zdsDB6EN7DaujtdJ",
  "key25": "3Gek4YYVyGYMBR9Bqfp4t6wGifbBucgxiwzirvFXs9WD3iAMqJQCzJQYqRUw7K6ksYFYkbEFtyKKDXRXMBeR9JK2",
  "key26": "5qka1Rnei5cx98tUTmYn3Kod3ncvjvb8fepfhzGNNx4KcxbPwug8ft6CWdaDsW8RmZUkgH5q2PFHZWh4c1LwxHdK",
  "key27": "5Z7Li1ZjHZzhxSs8ZKTZULUFi6DK8p1gXb1GyrpKU2jjiHuVKp6pBDX5oTpoeQFxR4vgGwxQXfPri799XitKxYYq",
  "key28": "2j7Ve56bYJsxxTVphBJzEGMSP7LP2Hg3Rp4hvGakEhoLn7JY4SYS67Ywk2WWE5i2qMKG24gQVUYCW7fmeHQM8eeo",
  "key29": "4AYtEebRDgucNmCovCA5exq8vYZK64PGXZZsdwnfVTh2gAD9FSHM1ugpAPWcr9XWP44xFANUtgFhSZV6xJm3pvTt",
  "key30": "atBZdh4aoCrv5nfUo23BVtc5a3VjqpNXYZSe1vW5Q5ZRLemyiG6NUtDmeJusY6Vt3egjNT7Xpw5ii1Nbx75UGE6",
  "key31": "5XtAt5dupsckwpWSzfJUoqWp4UNa2wU5BDxm153peUkzgSobyqXiG9eM5CyVRpJ1xQMQy589YCQuPh2hD2SGtXK9",
  "key32": "2AH3WrhxSbFX7mrCYn5LHUyQbU9LrjYL4aiPbcjmAfoenSXM7Xvp1TCMHuj2HhmPBjv3BAXPvJ1kQ6X8ywmUQkKK"
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
