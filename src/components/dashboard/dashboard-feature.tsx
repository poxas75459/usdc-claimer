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
    "3fTy4WzaxebfTRcHPBoL6SZeBuy3JYVYugRt6fnJTxVZzABvVPJvRmzJU1fBcCmYNJ2SoLfvCiVpemu2AoA1a3sr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2H8jgMBEAYKKUmxCW6x3mzreReghTpxPa5owTtTbXTvx47bMWQP3Z1XBBrDS95UTKCV1S62DuhzFLP3eGPvuptoi",
  "key1": "3YjdjGqdjQVWDNH8Y3Wo1ctZ9p95gWKmbaTyGiAreZgAJMsHDXE3Zjt7pGUo5MhckHm358L5QnCQXC11ZXeBDKUW",
  "key2": "MwU5Pk7YDibSbYjDZMSKwTMosNwu4B5ywJQqGcGLUUvu5aTYdJsaZmoEg3w7yv897UTriJ9ovzPSuURGsevPePz",
  "key3": "3HCmm2VRWZFMr3o4x42WJR7KVkdSgkJHFo5VA5o271d4dKSojUmtCgqBKdbQsAP4pXjRJH3gqvTqijtSGfGmW9nM",
  "key4": "4LypeWmap7KjcTpsVvGPVRM3bWvbGsmb1XTFsNzMaPcEfff6txwsfYEkmmP2coT9BvFmGNsK6E7VKpvbHdxDZSup",
  "key5": "2fCA2eZ6ec22LvkaWu6XGyJkaGMEvDWDm3sWhrUzTy7AcydKrj2J5oNQqQ4NQAjEDs1C1xpTshtb7H5fxi7gKrpb",
  "key6": "3TH5jj7fbvGkdsHaJKqVYcyFP52FHbYQG5vmaqb7cHSvCPrCS1yhpp7X9HDXtBkFpkqtcZ3ud52n1EnMDJoNpH4c",
  "key7": "22zUq5N56ucqAiLwTLk9x9uBodVNLKYxaLqx3rGPNPw6HpdEozXUi9MYG5KrSTfg8bz6iwUeKPCBfKchmguNoopL",
  "key8": "4fxkNC9r1KCPWeM1rtSnCHP3RT5PHTYSBjSzHs33BfFn6GLYrVJv2dAQKTUaNeeweebxv6kQAgB1ajqiKo3T9GcQ",
  "key9": "QjbQrr7mbtrftEFEJjDAWET16egDjW4mUHDiaj4XT1KHT51hwwpMtBDUAe39encPCSTBC6L2RixQUYtjXE9cbjR",
  "key10": "3sEoKkNtKmtVkgyantpoQZJr63Qzon4bQo4B46q1b7K7kEAtc4913AFHE3tzGa9jLmduFtcMnVjMAvUn68LmjTLK",
  "key11": "5Mz2d2utgutZnpUYsw7AE7DNQQB31LNZH5KV6qEj2kDyD6kbPiGyVwAbHj34RQhWXkZK6XxmGbC4nkCjehef59DS",
  "key12": "kWraF4Nk2CrFUPDCLh7kh2Vqva5UFWhq37QwG8wBqrPc6QBfuxV7DXDDJRCNKxQWmnTV9DKeqLAA2oceHiBcZDP",
  "key13": "nMPTL6Dd2hkzei1CF44m51gnRoGP6Ji1h4kVYxkd3459CrMoqMNojnWr3WZTEujDn74JRsLT6RbDYCp2TFmVMx5",
  "key14": "5Zw4U8tAKPaPWh7fVB4BVSky6kSEShPKTy5XttLL5rvuQvHnCmjrZ4yd2gRvLFTNxfvfcggFT7aeJy4VX4fXyXC7",
  "key15": "rEabjB8c11zLLhbkkmPnYHWU8qRYf7kE69dCerNAkLzt7eoLuLaaakYajNh3713AsSfCwrMLjoyBpn12rtQ1iBa",
  "key16": "8ReGCWd4LAPfmzNiRuXzHwxLHsweRNDZxsZcTxSm45oTLZrK6Ufyifj962WzuvdbcKzpfuf9vSvo6Pf5q9Z3wN2",
  "key17": "57QCsngV25FTQ8Zw7Qb2ANu51sJ7vY9orEe3qTf6uTqWg9A6B3JxvvnUxJP3oDiAoWEhX7Sxy68SXFNhGX3wdccq",
  "key18": "Mw71ZgH1U9R629ega9gfXGDk7yZLqVQLe9TBiU83yCJELgxAQwebQauwv1ApStdu7kZxQW8z3Np3BqDJuBvRUf3",
  "key19": "28u5Rb3HK14Bc7YGzfWbonXt7qWKX7GgD5GkPJv9uLHRecd3PxNpHVUupGRpwg8iXn3enxmYKZfPdZ1ZjZFXNjNL",
  "key20": "331NXB8rTYnippSmh8ByM3kp3tCz2PwKuVhZvTHShdUZ4113fCcdt4E6c62T2AczBAFT8pscGjxBQmC79SF5Zho5",
  "key21": "37KnShWJbPbvhPAvcs4id9JGUGGxzpBDcnV85CsSYj2rS3bHWBw3vZnmgsHdNPQo4bFKcMHED4Pz5A2PGbMA3oHx",
  "key22": "3Rh3gPvY3mEhZ3mu67JqFMs5B2GEYaoJDaRuRqcbyrFvkHq8awZJNUjiHgZxxjJX32h1MoEbMkySn2EgMh2QG6Lv",
  "key23": "3U4jTCPuG5Qj2B5MUqrvZyab2UqxKpDa1zGe12bL5BQZGn2zFnm4Tdt55djEbBEmXcoiKmQGfoR97bFzJAgDn8Dk",
  "key24": "4QQ2KBzRayNFibNzkkbEYEH25eeFr1vSFDKiKwjXL3crahcoqcveGLSbhSFdqcDToLkoPTexUtduj5mjThZhTkjF",
  "key25": "4TsCi7KoF8Wf3VNtu2BCZbfQ7GerzW6oLxSdLbZT554Rdx4kKWi3GLht6x99F7dbDES3s6vv9JrraQgcfTskgFep",
  "key26": "5Jux4E2koZhvxEXemn13ysMb8ZsDt2JdCqpUBuocHKwY4AF7D1yCZLGaknEfFTt5ny51jQ1BCPGRPUFLgKfo89j2",
  "key27": "4oRtWNxNZ78TaUESXMzhhKG2CxLwXH9GzDLPAVbMXM55yyrsh2RzVzopAESmRoFtETFDzYWFDAiV9aU3UrSTa2jB",
  "key28": "4xrQXUR2XBQhcpG5QEghvgDhfhcg2Cmheyc3AA5bYWRQQSJXrk1PbAyQsUTtAcuFP3p35F4h1bHshR1CZAgwzWqY",
  "key29": "43XQRzo2wwiJ239grntALmS41v8FAokgKyCi3VmHsgSfP7LyF6FY6PDWxcRxcHSknqWDQaMHvgzRrJJzoTEwwpVq",
  "key30": "5bJwKJ5oD784ytf4D2EHBXPKPtWrbktzLgHyhAjp8FLRdmSz6SJryfMCLikWZMNEyKjGVrwLvRXX47npuHkVG3ih",
  "key31": "3rtBuZgFvP8Z3JfkRk5GHtwVKSLLvikBW2k7ozAgV27oYmYWxyEtxFz1W6nj6XbnAVbS9mwPuqKV1GQAfnqEEeGA",
  "key32": "wfm6c2NXCRNzwQv28FZAupkSR9xh19QaJY14rCgm2dbiuce7Kaviu6PSJbnyp2AtCMfFDWw6VFvHGvSddVCwdsv",
  "key33": "24qrb6GHxAcSixvLa88f5oapsmT6KPSftxfTsDKQT1Z57xi8L5E1U6FWS8FaAnb5YZ6NJ1BytgHMCHq3NmrHvx3E",
  "key34": "31drLJGZ1EAidEfzVBCuRDh9j5dTekkMU2iUenC18LcTRbu78MzcN8vcNjDsxDczm5QBPvWsPZLjbmruVQKbduev",
  "key35": "5tWyqsgMTxScdjiprcwwao7TEknP28WWPycMLAndT48DsqrkjgfZ7QDzUi8DRkX5A9qHihoJcojLh2vTThnSB3Gz",
  "key36": "U3GtbduFProqPmnyUawTsAKzf7BdrfAyaEywydNGb43TkP2tA7uYUho83KHxo4YXa6kmwpmhPxWR7muLKVtRF9S",
  "key37": "5LniWwQH9khnZ9AkNuZtcLXLtJEDwQEDDbcCvn2vwjJr16keMwmfbVDjkLzHkHRwfK9T7n95YmPfDKWcstNf5MpN",
  "key38": "t5PF8azfvjowp29NSiMZjCgDAPtC2pYcBv6tscwVGDxr1xGUnVwNFkZT2XfBN9dUPVynYtvS4s6uVZFhE5squip",
  "key39": "i9PhgeLdqVgiEFfpKsPyLkXomLGmEZQz35SSKWALkacETVDGRud5G4UVEbcPdj4agkcxHaM3yb5nx4aR4A59u8D",
  "key40": "3ZC2uhA3NGQNXKNC6zf37dPbFoWdqsYYk5JkGmwSspWNuSDDHKJ2LufYekaDoBkssUuL97nXqLnHYRXdcerAxLfK",
  "key41": "66J3Pp7VZAdaZBVJe6GaVgUPSrDPZKPUx474an1fimCqy1NUNqkRETrL9KK4Q9comc4F3U4ekhBGSL2M9V1tA9Tb"
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
