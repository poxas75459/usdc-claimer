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
    "35XYKcf9LHVeh6ZpZcKm6XCXdrfUdZ5qZGCs9R5dqTKpzNbzCBENKrHWExj9ewKUTgpwWJJpFoQzbJc2KHfeUSeH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UyYbQYafJ7MMctN9ixPwemnRt8nLXXhSky2u2xMuDbDqXZHxabVxnn9XKH24oX5yh8tNidWezRwLBtUiToEuuSx",
  "key1": "3tMs6VELdEmTouD7yxrmKsk7CPyFBvAGx2cBsT9pQkR6kCKBJvoMe2hshGaynoNU1Sb6YLax2duT2Pz8Jg4oPt5p",
  "key2": "iDPMJMdHtRKYGJLaQwieqrAu1GGmypR6WPcs1zVX13j4SGg28i38nn5pXUyXRWLB9pt31yA6S8m5CfxfmDQNNxM",
  "key3": "3EjvZ5VPHq1DaXEf5BkwGyhMm2GCZHe2BvEEYQYccJdWBwdaBXi7vs2mhRf1oiAiHDMepMDYgNJttP5ZBxLDXWS1",
  "key4": "3YbEBjGjpjdDEgePzMm9pDBCcVP53sLjsg2EUoyWaAVQ19BnfDj5QJic26cSh6bPbr3oEBPUU1WynP4byik6Zfus",
  "key5": "5pCU7UbX5TPzdN7vXffwUGa1pkieu4FVkotV3nDNr6oXcHb2YuKNcPXhFu3Hc1YShnUUonDqgf5F51SGMyUkn94e",
  "key6": "33e9jQTNSmq3KmNMhPkjsdkV6tzRfkNro7UYn7w69dd89WKdeokaEyeTJwkFRarsUfbTSEkaNpNDhx6hwPmxGHDt",
  "key7": "5uyjS4GjqsW375FyAXs7QgWVaFmA2MYm6Sf4DPYr835NXD3FZY7ha7NdyQ1XNb4qit9MFhxB7dhKkzctW1TmZkQq",
  "key8": "2rLobUDzYuM4h1C6w4Cw4zfjWhJwHmiQsFWrYFPb8HQxvHge3sQZbeYjvKafe9x3zhdHG12KSqA9SWj8EXf2AsPg",
  "key9": "rDrvoejPMrRbw81KVHy1PSJEbtVNpjQRj4fBaqbsLRHoyQcCankRN76tn5kz15p12a8ks54XvXvzDy6uE5g2x2m",
  "key10": "ubEo5wUpMC2VvcyxJtSyWD4nhtHdcNoq8eG9oD27fPWTVth5LQFRVoFjF5hVd8n1cD1HZja2ANNacUYjyv3Zhuu",
  "key11": "2nwPoLJizNCdSj7xtAQu6yLrmnZp1LrPMwJhJhqPTpB77BFki66Yc1vei2n1xybRwjK2ASEByNq7odQXD9Cz8cVE",
  "key12": "25b3XMcVAsZog3xXnPFhyJ2nMctHwxUvwEQV1mCfrqR7TcprL8VotqkNZyguEUJL5ow8kfe2YaorRTBa9w5wBsuA",
  "key13": "5tVTNbdpciRGMSdhvaZW6NEWHascJKDRCAYPXjYkyxCsNaajigLEcTdYpc59pEwNm8QWaGCYz1Z8xCUrZ8yDbVU4",
  "key14": "3dYRCmHpiPUw7XtNyN3uf1YANv73r3BD5oPMMHdpobQ7keAvUJx4PdZjNkBvFkDUY2LnGUyUNu5Kk8RyQ49PkMnX",
  "key15": "2o9PAYKHjdmizEvq8WQDMhVbTzd3uA7HpeeBXXJf5FUb4Co1aQneutJyzmaMEfKDyBsJCgfwJsiFX8F4XAgV2MDH",
  "key16": "7QZRnY3dY5yvNuhf1H9cXVXSPf5NCPbtB5wvc4GkUfua1NqKX1n7iLexJxLi6om37aM7wGT9dXhX8UyGswhxZD6",
  "key17": "49PpzmUWafQ8XpUAqDA1YAmzyawJ3bT3ZPac3EsqboZrtXfZfMC1E3Ko2ppBgK6NR8GFw53kiy2e8D3fdK3k4VeZ",
  "key18": "24aEFJxNspyU7YTfgwGkeLEch8AtYTZxwso8eKKGKQhZgSqpStCs2R2HSUHrYLRxFKcPHRS4W78noozVdJTaavvp",
  "key19": "3nR7BWjqFSiYdHAr1J9JiUuu1K3iZsLgdsFyECrYRC56divXEWqWJKEJmVmwuRe8KJdnky5uqgKbukSsN97T7EKu",
  "key20": "4AheznjrKyDq4sC4Xcg6Furri4c7Lkt7CGFJW7eRecrTiZGR41jyiuYzNMftaJRf41qujNgRdUUfAkS8npSeMegB",
  "key21": "27gbacQGRX2HEKz5i927XXE2MY4k2qkLozWyd7RubxUcUAUbAa5eoZGuNoG62bayVUV9rVq8mCRGbFKi8P3dmnqC",
  "key22": "4DCBDhjezeVVeVDeG57GgwmKkJL4ddvBjqXW7X77YrmSk65JtAcPtctiMzZkSew9VDsspcK6f3FPreSrtCD2GX1C",
  "key23": "3qkx7VxLc16XoKmjmNgHHeu57yigoEe6i5g4oSgjLM59nAAnu53oGxVcCRq6XzGYk2KWeaDSk54iUmME9w8X7QFS",
  "key24": "BecurtfgeTnWuZoK81ZpnTZBQGB5DyRfpMZk21K292CTGw3WQrzuDubsAATMsynbFB6XyBrLpGMdjKBUupQWabg",
  "key25": "2mhSmtR77bc8fS3z4TrsZxuQ6GQVk3WRuHJGs9UUbnJunKjUvhTiL7sZFvEQ3SaaiC42kzTait883cTDJka5S8q7",
  "key26": "4PPGiKHEmCStdd5JmQxcaVAarZ5raGwJg337UohPTto4ieY7L59LEZiKPvLbDGqbExKMAxSwZ92faBqrq3HWy5th",
  "key27": "mEvW6b19CkLgk9BBjWTdjG6Hq14FNAceiHg27X6ZaiJJdiBDsEBcBJpyrKjZHRuhtk4G5khFFTGE8bCH6GitSuh",
  "key28": "2e9jdtrgvHDeq6vnQFqGSZxVz2hvyNE2xW3jGk9KkZNaLF5kgdgj87NE7WAfpVPpS28txdp7ZuaGXqxsgGfCbFiC",
  "key29": "2vxr3cKGA62dyqLpeqoj1wjBuagy6YVXBkPGHxZ7XNcJ39dxmHJBKG1ne6x34B2vBjkoM1rDmoPbuMPfd74HgyYh",
  "key30": "5d98LVkGeQvooFUg6qm7mGM1Vw8WFjTzqdrha9SJX6WV3QkWN3dHbGWCi8RhYrsdLqtYDETb35ZM7TnGpGRJ5vzq",
  "key31": "3qU3q2HYwBbLngABzUktghNDe5UAyBc5WeitQ8xz6rsd79JwMMrV6r835iGY31epvYnMvhJfwYb94ab3Q4RbzkvV",
  "key32": "2XchNLPNSQZrGKeAjm3Ya1yNGDvqWWiNzFrfGkBdzWrMrBgiJESTFqNJtwn5PqeZBDxsXfvo45puwaHHeP1CiK9L",
  "key33": "5mR1HyDoYWMD8UHRVqcNmRQTLk7hAT7j7iqKHsYgh3gBmYGkwW8mTJA9xHpAhQZSCy1My3E7q2WGBjQxENWD6kcV",
  "key34": "67BnG1A4KXdBJidAGei7yVcpBsw8V5eMSKwDVz2f6o6SaapxDHvAUP9KNkpLi4vk8dR1FpftEutGvEhUA595Y3ut",
  "key35": "5mYNcZapWfwGtfHaNabXzBJQdC2korNSdUbGJxjqTgw5ZXJVsfdA71s2qWX6R7FG7fbNAbbQNLsVWNLu6Dkiy31P",
  "key36": "4QcVoBiz9ZMiNQErTyjzXKts4JjUJxmF4L281c5xH8roMuNHvNyV719fvzLMuktYSNayYpxmJUSKzraLwAx4UK55",
  "key37": "4wbtbUPQvsjsq4imTCUu29HxCvaUa5bmjmCtgCBbXndFhNVseRn1EYwLg83cY6Zkr54oLRzjct9sxPD84xqhK4dD",
  "key38": "4a5dX98co4PqRU1G1nG3bXAgpa1jKDju1y6BdtUScfYZjXPrTHCMCcfKPPA76sHSivyiZzsva2fcKicLpu98Jwko",
  "key39": "3jbmeTtSLnsHwwt9cNBVfYzDgFYkBFEnCtmVCdA32i5VGVDanHh3EK6FK4nNJUdM1RC9AWiKYqX4AtyLMfqCipp4",
  "key40": "5dKUeu7ZX2yGdTLk28QQmSZquBwtFqQJGnZuBy2mp1KsfjpTKM7SmtJxMKpjQp5RAfhFbkXeoxyx9HCkj8gqq1DF",
  "key41": "5fr4wqFTubfKFU7VD8YMVxYRvET6UEak4VudhmQKer1rmpVbVhNtjRyLCARSPgaNL6mQvsnMSwd1LS5sUUFFDSjj",
  "key42": "2pM4iEq7mfNxXwiW4aFN9Q6ve7iS2v5RgjQ1j91Bskx3TmKFV146XTAuXmdeW3zZEw4VfnCxeosux6tLrKH46Si4",
  "key43": "vu51GC49LiipM3zhpUMuNNgp5dWa1TdKVKsDJeJbSGdDQCgCdqvgptkqGptA84k2CrrpeZQZc47pSXm4zK77T94",
  "key44": "4XidkCJwGZHhKdxUxDxHjLqwZdW4yZ6cLEUGqcDypJhF6iiE17C4f3zW5weLSyWRx9zhioJBJAWe9kvvyvuyygn9",
  "key45": "3kJUtjeLWnWgDXDL3n7FooDr3PdgWVzXwD2JDzx1ioKLdMpBjGiRmCx4e85e2kyhaP8jqi89YUB8tAvKQpxEj7r2",
  "key46": "2SFArMYbEXvx6fcWWseXffDFBFDvgfoBAntLx37tMp7XG5J8KutAxkj5H648vSPpxC8CBUxUeMhBb2XhZKpc2WoY",
  "key47": "3PVhz4L5v4BAF8VCFY8C6X1nixyK6n7QBcHkJWb27EoqZ5Uv3ACsEy1nhsSHLD6ex2Hkjgma4wjRtT46bbfRH6VZ",
  "key48": "7Jz5SDL45Tn16SManXEwKqpFDhRqQg7pDKTCcxzRrBsS7oGuEearfPjCKH5MZ1eSS67qdsMWry9TngsXNjwfpco",
  "key49": "26zH7A69fXhvMAH3fPCT3kKGtK5sRbRR9Ld7j7JfqQ4BLE2VatHrjxAVkG3N6cSyC5QcC9iZmcySCuVVSNbdwHsF"
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
