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
    "56HH6AR7tG7xNkfxX3HdtMdT3WEPAgRhnsv36VmfjVuSX5my6vcZLg3QZ3yMQcf4oXsaLUv8rzQ1hQR844nF6apu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ndjLEAboJMEqgi2QRQ5k9dBoHQpocwKDzbYMyS2dUNawQ9FARZn26pJXax7A6dVGpDUhin3n6ka8viC5Vm2MeYX",
  "key1": "A3VpkHsgv4oK5djpdtVJxfVj33AN6AmaQf1JbPyAghyVoKTdFXRK6C6UkRMNDdWu6CXHFCqvp7FUaFq3ZQe9Ua5",
  "key2": "4byPCmzKACHyT3VxxUGDfF3yuMizJTkc5rUZLfk7L2kyLeL5NxBpvd1boYRpUCcgBVcx9MXmvuQMhdcX8KhtDZYV",
  "key3": "5WJV3HRM2KTpcJPEM91JdFqaL8ssidQcyUu2BF9HX5BNHb6emsUUrrJoQj64JK2PM7853oW2RCnpPk9j6SD1yHAp",
  "key4": "4S6hGGLkLaSSjJz2BNNZ7JMyev2PR9a94hf6q4krHJuX8C6JFoEc5JY7JxFanvcUWCSmQ7JqovsWWAyoJWLuYCJu",
  "key5": "3GFCTMpaLiBd8S29URLp8JzdVEnQFnEKYtNUXBkQQqKqyFHnquFS4cYyGwr9z7c5CVAPjg5Pb2wvskPDfrgxeGmz",
  "key6": "67hr1T3D2EPQVMkax3RodwaXmcmyuujf3piYKGauNiHUhn3zivgmR7TkUzJLKxHdpPdJjR7Gtnob57FnT95hqJW",
  "key7": "49oTFMjBd1xLh5LSfiswvkMerRzMA7bMGNCYQpukkPVMgYzay6A1UyKNYfRrwamfTP8KsZA5rHusWSQnwg84rFrG",
  "key8": "2gXWfTdL4E5W6eEVWN1CrCGzDQ61RNLMEdJGraqxiN3oDC4gmDU3zfmYXr3UR2RRHQUV9RkZ7qqNaKBFTHtAqrEZ",
  "key9": "2CCXTuf7yForEuZF6WbvwJZzy4Fq9EKW8W8kdXbBgdQ1vxXP1XDJqYJkSaceZxf6JK5XvjBrA6bnXvG9cnQaxgZY",
  "key10": "dPP85fYBn842jRiPGE6L7jcUEagJAuRbgvzx2WpYKcrsXQUSPzxjYETuWc1dYnVqMgYkQ7MN7Wb9CE2cGiPyjnm",
  "key11": "W2ivpvkULkmL5a5TpngnkuaWJBwdYr2Xzm5uvohSPStjRgBM5yYp4yzrEe2gKqYRv5i9iD3kuEEqfjtGkzNZp8o",
  "key12": "5axYwn6oDpGWJBCRxr3Z9aiMr2eQEpFMe2pCWW3jEvwBPLVmWcpUjixKeFwP5TmZvcecmyPT4SsYj5DgCqvoczUc",
  "key13": "uVst2YanVXwiCXxHFPkXer34iquYdkPFZYcREma5h9TshdvT566wrAUQZW2NA5rvWsJ3NtP6jJ3Qx8pLJLQzY2s",
  "key14": "3vUZT273QE5JAzLAZLtt4AcYyQPfwYTFgXnK9Xsfv5VRVoFDZh856nu6MyYZGLZZ2fUQhXYfGvr6vnjyzcixsFAR",
  "key15": "4eLD5gFc7L2m1b79BHcomt51wUM1VFgdEerJ8tdawDJSZ5xF3yhWztNf13CeuPfVC1TUfXoZLS8zgAGYn3kRqVk7",
  "key16": "2g8aFa2AAAMY43YVyXHCbXz2FQw1ZjxDXDiy1jymieZqB8NjWAtwPcLtU99KSHh175d9efqktD7MJjsBXYbwr8g7",
  "key17": "3hK14ZrXBXeJYTcw2bbHj3ktNxRmrtedZ26UN84VQRQdX9vYdUVBjeyc1wo3yxwxhJG4A8nDyYG7draL63T1JkMW",
  "key18": "5QKKPeaurNVRBTsXQ7LE92bShX4rvVt1Bp19cQifWp6aWnMiVRLTjLd15CzX8HUtLB9dUcXrefYzKVVPjT9BPBHJ",
  "key19": "ApNJaET6xX1Q6D3LiTVoUgWgXrLjBnLLGEvLCZsGvUegUKmJmnTvEToo6DzEwb7WYwXs6HLmuwF5bo7NTheuurm",
  "key20": "4Q753hNY2FKMkfi64tieF9JUftjCf9RQVawArmG5Z21iZzDfcRBuHAoXPnNJ4RshWioANG16Dn74hRfBwaNhgeQ6",
  "key21": "5RGTLYWxzXLBRtr2vPncRweJ4zuLerkcFESQmpPifmyj7ubyy3NjLjjBZZYhnyh97Qf3wVxbT6DAvjAMaG7sDU27",
  "key22": "6wpZZA9sjGMPccTbyeiPAj5MQ74u29Wa5TtBXjdyZ9LMp7f4KEJGRZxNv62UTtAk4nzdnUsZ462ts4beKRLsJRZ",
  "key23": "3fQaK3ybXV7JnTY3vQWtgFSf3nrtQhRnqje4EXXnoq1eqaKhVHCWkmz1LZPQPbXWFRrKf5ngEUq14xkYpLZvTn2z",
  "key24": "2j2gQcErhdr7wr71WHdomCNVNEZSHBRhAQaTjbYjkRy5Lzttc8rvmm8VADewwaXbhAmKw4PJMJx2vPEsRcHhvZcn",
  "key25": "WjVvqdJH1CQMBq2TusHYczoyEfPpQPexEg3Mvdx6rDhw6kVBM9t7DkwvsCQJWjfEqaG9bQh6ncCLiRQggRZXeqo",
  "key26": "TAS9knFZSVhX3DFm9JeMpz2V5cgAA8py3toB1eoFYJoboBB7Lixgx3ah9vMPgsettnRD1dwYARKS7MHL1ikAkPg",
  "key27": "33iUCJLkWrEZSPmGcBFfnCR5fSpHngNfX4zNgsPXzXLkDs9YugW8ZmUQbYMMiUoi121E7KGuRHfkg2YkBaPCpm1j",
  "key28": "vEDJ5vqEkUNix6Cc7VYe7FwXVQjwMAdTgHB6pgL4bxbkVrgjVhbZCbrcRogwLHMcVWJ632qysUx9JgZjhZ5h4wE",
  "key29": "3ib7eJd3au8SUYzMikCnvNbMTGXMMQoHGB7brbywABkf5uxELtcLDfySX3LPjgKqXv3zeKBN7uzz4vinL9v8AVVg",
  "key30": "2xEiDbAFhzFqoHT1BWrvau12FMu8BUUbYcoQsuPFq2dmutPjxcrSkn18LaiNfopurbVbDopzXN12BAKanEe8vBmn",
  "key31": "5bsu8nsoxvVwCJkQvDyD2U3agrB33TYd1qskebA595kMs3xjcE1WeMzPJ9WQ9KPDANTybkiLMSedQyTukP6Rjn35",
  "key32": "2WdL73GqR7oJdPEnxQCBbjzBVAftTNe3zqraDAsvxGzLQo4BRbrnH3yYcCr6R1R9dFcw141N5Te5HtFau1KAWUZZ",
  "key33": "2x1UBMLqPYe76cTu8gdnE3mhStSC1qtJkSW6842UgHaR2KcVCEN3jEsbetzsNw8pz1SMwAzp7qzpQi56BzTXrW9T",
  "key34": "5nxky1mBVBs6ZMaY2ogbe2udnJ9u6EwmoXomJwq6jNV2ZvGn7ZaW9KzVYeYLLvEcURFdPPgNnSC2i3BCXVkbuLvY",
  "key35": "2Lnuhn9fWwdLKrcLA5FRgmMiuGMnqxxHyhBShrPaZYvRCQdq9FrB2C2vYVbBya5QZC9CZSSNLJU7CGpkRrHvZGSX",
  "key36": "2i6KobNRmZj1tE69ukHHMgx8br5vLAgK9JeuwaTRV7Hd1aaHwwhmFoEC8RiZnLmyGwVV24pEtjUtE8BNnWMTy3EL",
  "key37": "27E4aftDqMMqFkvASQUmD13aGq7goeeCK667jotVc4y5pfGbK7daHREHRjCEZubyEzwtnYksesiV2ouvFRaU6YG9",
  "key38": "5eKMRxi86bnQGyogCYKaJGoA6idXMGjSbFkBmB7nD3CtYuepuAeyTaDGkF5hrxopdCd71fZGBqz45NrVrED5q1YN",
  "key39": "5ARLdgqGq9riNiP1dx8WXRQxcJKYHFBpyB984M9KYUVFxLkasBq93dg5YEUPYcnzp8H8e67wG2XimUYJ8Mhew2f2",
  "key40": "4n5qrFHx9NZ3TYs8NqeDUQYvpRwo3DrvG4yqb3p26H1UGxapagqbWkcDUVUPkX1Kbcg6mRj5FuZS884T4pMM71KQ",
  "key41": "2f3cXtQEtX4VTXWXQLKogQosXTHJ4BcoAsMXMD4WSgfExSKVewYUUBamQro9DGUmMdK2VSv7mXBCT8TY5pJZSYxR",
  "key42": "3RFxKoiW7cNdE8LteD6CvCSGDSEPM9t8RFnpT6MLEWz9wib2BXgg7K4iTkvCgg5enX74PdsbEWJiquGCFr3oPgCF",
  "key43": "hppABGXzBwu4Utf5k4tBc8bvYtTFUpyt9exUzqK1Y1X81rwineYcm7gKjgfmiTBNncQFHfzXZfEQhaDV8iLDLBi",
  "key44": "5i1Kem8A7kYK7YVdrApPwqJjD3uxK46x99oZqrTF8HiT1LbnP68nAeDchCVoWmPTJen863YhAGoypgZD3rM8zg9K",
  "key45": "wBK9YewDiNJnSz4qCGwrCpGVoxEch5pmCgVkNTfhdKKxipcXvMwSpJeupFj5UVVjLP7Zsme6YMv68FaZ6mCurhj",
  "key46": "5ryew3TNY8BXtY3fw1WmYPsLYjf6TSq4tbts6vmZ6U7H9chLSQz8sb1inqYMG5EphPRgpMBJz917C7iZPQVw2aSQ",
  "key47": "49wxP5DiFKKc6xN6A5gyLStf3s5gg9JoXa9iMG2mg4s6ynk6kgGszeVSdz5bKwswp5u7L3rcqNugpTknSrk6CiAY",
  "key48": "5kf1tC5XXM4RLRb7qApgvSyjvtBPVMFqcohcr7UQrJaJkHVLcbJjmHnLwiy3txHeCz7BAfPTQai2bH2gEujMBLcb",
  "key49": "5YsaGNMLR6o28n7cgxZ1V5gR8keRaxhSKfRykr7CaMcxKaYkrLt7SLtR3Wdmtf1GJxFoqtbgGqKq2N7Ut6EHQzjy"
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
