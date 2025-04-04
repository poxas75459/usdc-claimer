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
    "4xW49EduwTPV1NcQ5bFvyfbSjcufKCgiA6x2mV7u9iha5QW7jDj4r7AGuV5MfYXnz3e3ebhX1E1HZr81YYr5R6hb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rviYroWeSVKtpGkxqLYJNWpp3BMifsE9ddfdjwM7e2kXA7xwwSGvcho1k5i8CpfFF1HJdmoC63tPiBPnfugYCoU",
  "key1": "3KiNAxfKncKs6Rygg1J3z61vay6vKyf1oLuXuj6X3VMLtohHprtDYdiS3TY9sLWfiU67mLyhFzP16xNhKxJwW3Tm",
  "key2": "4MkapEVEJB7VHL4yEE6oLMGq2AvM1pjjkdXF2Wcunq72wDfFxRkcsWmHSSCsoPjptqqPVFm8P8dvkbnugnbd2xLT",
  "key3": "5CmB1PtpijrbvYeQPML3SDCdsXufU73iB7AMabQYSi8VVZeuM3Sj3zYD4HVN53zsYukL1P3Pr2hqbBtDgj6FHc8s",
  "key4": "GG8EhaVCSN73Z9PLGTtNXzsBdMsX86wCGP9ktPjFsNdrBSEA58yyVEH75LhyxsdZSEVcdgQ1SUMT82f64CkrkVZ",
  "key5": "4e3MiVxWwrFszbchg6NcakEuBs9hh9VzuEGvCbGHwtA8w7Y4EwwR5MQT3PCdUzhUJtpfH8EBGrJ4Xm4j4gwnu1a6",
  "key6": "38RWL4F4QDGLhsD6U95vcjodFRmZ9EEkVv51dBZtTATeBi67DUPLjmoN4F11aCSir3WhgYw9xJ99EQskj1SvAy7N",
  "key7": "6Ew7SYDNBuCkufVS8X7kgk6Vn96YgVJdk6fk25onJnUgA5ytb95guW5rGJuGrAkNajb4t9EmJHNTpTwnpgbydwK",
  "key8": "5XCyKmwYb9xXhERGAkgtrfTpZYLaZFe3ofTsJLCW6BTma1pf2Rmq6otWxngrEzCVDY1u15vnrxq3oDoFUkkf83Ye",
  "key9": "P5mxkdmT6spqw978gmzXwxKoFK7WzD1C1QkqMwf5fd8YbUftS2XmdDLGXq5YzJv7Rj8GqQXVWk2vXThQ6PvjYyo",
  "key10": "fb5vZoizFnqHNHvcyhyTzhdkWMCTqw1zZR5X5aXHAaCTnLJthFUokZMGmvtSviR6a5WfJ4cE96oVXFh6qY5ovbv",
  "key11": "5HJKsLj3r6zw2HuCfh5xpGy3iPd9jELAi99bGB2eAc2a914VeSyTBVfLjQTrtpMkrrQD66XcB7YknaMtTq6d1zYK",
  "key12": "HXUkw6CJt8869e2Ax9RMsDogxy1KiLXHvU4MfScykxb3HTPuJm4HiZ8TL6RPojWt4j3NAYub4SMXhoyCKPWDrvK",
  "key13": "3tTkeTAkVJkmVy8MnGdThJjKHTM9XV1oBuJTGewbvq5ieznnQpyrMuc8qBiqotQJtTqzS3vJuok1dbWMWhRNYiA6",
  "key14": "5FcZhRAx7e7QLTWu4aBxFpkJX21MP6UzJQavmLFrJcLzTcZUCCBQCMaufxzBqiBrTjJy9yYYSV4MUbQuW61Vitpz",
  "key15": "mf4ermm94oaLwhkybiZBx4y9gGpp9SPEKDbxEt7UPf4cNdZPihgb7PAt1act2dmZWdxvpfmjPwfE87cscffSb34",
  "key16": "2X2eciGKyniXFsLfzM69xxjJGMj23Kg57h12sDZzPSX1wizDUDXniSMxFNoimqMGfstcvhbkbKmq62CjW8AL8J8V",
  "key17": "4EMhkfypbJYgnrt8q2qyySNhECJ2XvZfXDAdbnoi18RivEEU2XDxRvaNs7ZaJ4Fnn3LuLt3GjdJPraEitMUf9VGu",
  "key18": "5tjVoewRQjYVxZfuc3aifjj29bnULrWqQE5jv6CNq1DBk6xZoEwrf3KUKTVSvJkL41TTECiJA2tbLfTvanRXCJzb",
  "key19": "5UsDy412hBZsvmRLzLixrMbt4uNYmswKPZWx1qZ8VqRjg4fRPgMgcLN5uD1JDDe4FQew3BZE8A51rfN9QviKSpQ8",
  "key20": "Wi1cAcZS3rT91SiDDQWon6xDzHDyqJdE6tx6nbsaDy2Xq8RqX5usQWAHxe3V2qv2T461nnVjJ1rUCN6qEqHg8ey",
  "key21": "5Q2gReVin3wwbkU3j4w7GNm67gAkpCZw7WeoxaomzfcNzZU8r74few42YVKMU4cB3BuxUVbZafCcjNcvfKWKxo38",
  "key22": "avRicJEcUFuVa7U5knAqJNfAc8bq1c5ZJpcNojbsT3VxPNJ869fxvuGQjerLp1wn7G7PgWBz1BwBDPmJkZRhrUq",
  "key23": "2zTw1GtU2v6TcuXmMv41GEi53rTDUw5uwmu8oybGDt3fGaZmtzqtcTW27RtqzNxENrYzb3c3BdPtEu7hBsvdkUkh",
  "key24": "27XE4fcGoATHn1LmVTahY7Z6BdAL7NxUzM1Bi424RgBeMRzkQ69ziu7FAwKLQMQTGL9XDjejh7SeosERGb9RfuXy",
  "key25": "CwihBHPCJUwFSUYswfLjnGZPLT88qQRJsmNnjg9xXWvYo8WS6er5DJu45RmpWUqWhbp6sxWoHagodCa51ySVy6C",
  "key26": "4JWF1T1bq6ThZXzniFGyUMavuTC9myepdUfeVSZjm5FqMS3KzxNwi9p2aH6cX2iRtqS38Spkq4WeU1YfeheamM8L",
  "key27": "4iakAToeu9TZT8UZ6dgHhA2VeZ5DLbuYbisTufqKuKSuzB2GhGUTPQR2dMJWQw6GQi2UotW4ZhdornSa8rLs5yUR",
  "key28": "a6655cjS7JcaVYX3cBWeUNRAQLSxGgLqb5rJ9F2sPxP7FRLeR1ZgqoKme9pJh7hPzJhiX4piCJek3L4AsumrA7C",
  "key29": "5R6B2cLXN3iYBg5G1ddeoQeD1Ke8EqftC1FeZB2kc1SgC78T6q8wjAvmQptqbEj9qW7LVBksebewMR5aX5d4vf6b",
  "key30": "3gSR3dMfN9XAfwwzTwhDAbzhMmMhwxSW9ZeEFJFdsg7z77SHgfJUaeU7s8Rs63fsQSr2fuB2S9dgRB5Q35qrwnb",
  "key31": "4RC5q8Feea39JbEBM11YaWJbrny5KPv9FfRtrte79kGfGMsvBqgrocUySUyBiwQFRoGzdC8heSF7rHmJgwbgBMSc",
  "key32": "2hpz497uxA2RaMoyvT8XTTVao8BfWjg5hH9HkB1Wo7PekyzV8evZ4s432xAfnFNuf1DdBrYY2HYQdDhq4D4D9ios",
  "key33": "46vLmTUbE99mgYGUbhCz2qGNKkU4GuCGPDQx6upjy9NZuGGvFU6pfDRobD2AZp5ENuKKdfoMriH79ZWN4QWgcQ12",
  "key34": "26TDWfyGVUjiBJx4hWWuvshbq8qauPVSFqaU4frWS97fMUkniauaYNfVo3ythbyjxS4iisidbXoxwKbViFtLTDLY",
  "key35": "3GfE7TPi2nH5kHZY5cwuK4ZPvYtNU4UsNYopAt5zPu6fD8W3MZRZECyS56Hzv7jt5dFYnh5QKgpsbvKQ8awiYeU",
  "key36": "XUNH66iWnGcjihduCbY4TLea7BVWPAAkj51vxGaw3BY3kfLrqVWJcYctJP17Bi6xBL2kKeKDM59hPVz5tPMxg9o",
  "key37": "4pKAg33bfwe1cDdKt6jSXSje86pExRsxn9qn4NFQSKugpMmkZVVdC6G1jq5w2FybVsrx3yhCNEERGd7JWRPz7AdK",
  "key38": "4ufazNvJ9eX75wNPqFSm5CEcWQDxbrjWZ6sWnPKxLn9gekVuLqxRDMg3uK8cMA1D9LourzbEcgKCSrNVhR5yaMmv"
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
