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
    "5SSRZ4c2qMLFFxL44Wz51uB5pTwu4U2jKVJSoXkLBpwJPJtXPU2BJTTTTVRS6biWdnFumeEy1bnm7EGgSLMnsaHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V13t5Pz586ZLRcJcdUJfjanmTBebm6HFqvLoc46TsgjqjCePuLFTnseNM4vQ1exqd42Srdc6F4LDr8Tw9WwezKU",
  "key1": "3XXxZuxxtermyUg92kJihBxvmNhna3Zk3eB2iZboXwAFkQxQg7CAZwhdqfMZCQci9aMWZdHKv4cqwVxMVSbiZJQx",
  "key2": "267JLeRgVnZQpLcTm6yHUusKgqVzRNGkrDoViN4pp4gz6LDRCmhQpXydVvX24yvfhxgRc5MTfyGkUEUHpt8fsRqz",
  "key3": "3tgKYpzR6spFV6xAbiQX5URJSb9yuoLFWEvmGKHndXj5V17jBTQgaCZC27NwRBwpG5KPaUvZAyyFr9mmVKLyfuip",
  "key4": "3VeL1xVGXqeivxkkEqpue3bjcw9ZGuSLmAa6vDocxSDfW9iCTBCR3BRQ58qUPSuVyRd6yZE79pcqdTRD8UNxAbLH",
  "key5": "5M22fcWv6iWbcqL52HpHt1XSxpQV7sog2cpH6SBX7awAVheJnKBx2dexypxyFeCwTV4vesSvtydZs1uWGLTqiH5C",
  "key6": "4uiLwugZHNPM31h8sBmQ8DBi7G9WgEbkxo8RrGDZAGRRZ2S1S3XkRx1FBDEvYqUbEquJMipmQRw3xEUSaUr1mDGK",
  "key7": "4dycmpHmMn6TQrG8qJqpP1QmaDtTm2AA2FvbYuKjH36qanTk9otjDNCvXWmaQDmspdnDZYTLEjaZbYKxmSwLsHAy",
  "key8": "sBjr9VxPeRZBcG1xEfarxLrwb2Ma7nufzWWTbj9dWaKVHsqYgPygVJae19YjPCh7vyR7Y4dR1xdBcreL2oMKnWb",
  "key9": "3nsiC3Aza6aw6GG2VBrqEgEceozVrExoZ78Q5bo943m4unYutZ5wpup2M2roWY8jtadkTim5KHdYjzDP8aAYq6kN",
  "key10": "5ucAvkUteXzPhXdp9YZRcQhdp2JqAuyD4w7nJY9hr8q7QwEcdQSf96crXoCKu69M55XTFVabrGYQ9G2gw6puZepq",
  "key11": "4Up31Xd6BB35KCDoAGT1J4EYZNaB8e9ktCj2Apin4fctYGXa5vCyuVFergLE33X2tyiGXFeNc8ayBbcyf7MzBNev",
  "key12": "67jLnaXKoUyht84BuM3rQcY5eVSQBwGV77rw9LynRptVGyNu8LrbVn3M9j3t9aRE2oFFugtkvqExpXpsiTpwvnmt",
  "key13": "4bG3VW1CziiDMa3WWPUkGcTnzhiu6YT6LN3foMdSN85YNNzS2N7EwxWUZazd6KcucQ1HYU3MoWqF5dyisTmzYiQU",
  "key14": "62GGp6v6HxMGccsct9JotYafNxFWEmpgpL8UV3eQWY9XyW3u8BJbmEg3eYhpYguvNzcSzgbjB4HWKeAE6XLfe3Kj",
  "key15": "2r1bSRALNM6rcjLuL5pwPT2XpvRVYAc6h2X5tMmSjFh24AHgvpd69zeYzWKcSVmFnUVZLcVNacpAQrBLLTFC1E2",
  "key16": "2nFhuhh7CgS2sTc9mPXovvJNJEVCLxq3jiEDC6feXhbDuhUA486LuC2aij4QLeb8WSE7mcrk2wvbFNJ1mPRJwYC6",
  "key17": "2Zk7MXtUWCsWiTXGWEJvzTPfUAM493i6krSjs4ptoXP3Wb5zeJ3NgqRuNrXx7SQuw9FY93A48NSxFt57vEKqAT8m",
  "key18": "mZfjKC7CmMcG8V2h5TLHXtxdTYUxGKECQL6RqEX6G7gs32jn75HVhkvpNSA5YWQ4osmj367VRtz1appQK2pyaXR",
  "key19": "4U6crVb1LsaJjZei9Zx4giSP8DNP88jpR4wmG1u86ZiT6xLSMqSiLu45uQTL5FRQwjof1s6SaG235WXaDYua4RSf",
  "key20": "2uany1UL9JmzjyokiEe9UHZrijMyqxJBGSUbvUoRuELfArWzncA9hAQJ6UQ8rcaGCofUNxUeCuNBgahfFCV7nCa4",
  "key21": "3JLcQgyg5HWcnSYtaVsRUntAsSZ1JQGYvJs6X55XU6DNdSzLRE1oZwpuPeutFdiPYZMUEpjErcA3UyvsVcXQjSfx",
  "key22": "3GS1s5oypkvdhBBjZ6AtsBniN8wJmXDU9c2tf3JKiDZ8SDMAYgdAEomBMaucnVRjEsKH1oRA9hyf8BPnS4UY4beX",
  "key23": "3hJof3c5S5FiafAwahFTAXgnGhvjnPNguyvvVb5ET2KfuBh1PTjdo1fRjfrG1wLG86EjDDzR37xqWhR1Q85WmYCN",
  "key24": "4KCuCiyowaLXM9Gu5YP4j2xgUjNDKyj3qMm3G2vjXiE7crGvoCxprBJyqjjrhPxQLebLeZjw4HVAFnSiYw5chE6b",
  "key25": "3n2NgVvr5bGfdw74TiFomt8Ga1Mc12mWgJ4YXe2W9nUdATSK616FdvtL6NkVcpMgsauGTsmhUupLjXNVdRGje1tw",
  "key26": "4uvf3TQS6h9MXWcXHkSgSRZmdcAKJia81fft39uW5J6LzTcpGhF8m3Fd5QCfdduTDkHixCiHxv5MhzqGkEaMBu5r",
  "key27": "5op2RrGDzTkrH1UowBH7qHBhLmNL277n75rqVkkd2YKjNQZxzaoQvEDbRmzqxHKBbh8VH2dMtCGvPNTfP25x1LgK",
  "key28": "5ip7i965E6YCwdPUfZBsb5UdrNyu2QbbQbiGAmm3DNJvYFqvULib1mPybb9VJcfM6EfHAzmzroZF5Xybg4cmWGZf",
  "key29": "32HkADwhBN82F82uruFYm6cpzjqP1Ev8r9jQCjdqpQxL7rSj8mXkNMw8T4RLoioCvpk1nGQoD9ZA55JFRsEoQ8HF",
  "key30": "2LBYrj6KJqJU2rjzEZsiuqHb98DGyknJd2gQ27eMSWLEq2XRzk37w4hLM9ANR4VaFj8NKY2KjgK4ijGGPJQV3MsH",
  "key31": "33kKC8Pw4mht4m1zaN6BvBWp1xdVZnw2E2GpLFGJBZ8XKTGKSPTuZopt6ZBNUFHrB1PftwQUzDytfsaa1PBHtn4i",
  "key32": "67PpPDqyhqfBXtycauW2qHXLqFvfP2226HN4ZBq9hJxsw3qx9xBYqDC4UXeRYHtgSd9e3zPR7j8BdCriHBr29vqa",
  "key33": "5HPxjhWj93zwPgQkKbYgSVgk66pucfGCukZ7KtQGJ9EB3sD2e53kT83JxJf1hnPTrMt8C1upiV9SbKsnMGjq6Xgy",
  "key34": "r3Lwe52XZJU36qxZJSdR97WwkLSrrAKWqRR2WjbxsYiku5Rr8i5HF2SkMX9ydyhzcsqeFiP6nCZgpVxZqaiTWE8",
  "key35": "UXkjtuJDwGfteskyZ5NuvKWgCNS6Ri5EPojpfkWiLVMUJwxCEyNshZoJtmtScUNomFNeKyBC2SPwPVas7pyqd8j",
  "key36": "2kmsHtb9HLG7uawAGi2Pfi8ni1DdqhjY6dp9CV6mk9t2hbxFpmEjeL3kzMKxsVezkWE7HThHSFeWhAkBEzGdqoVt",
  "key37": "24qXr1FdFsWrAQeMAbid2vSq9At8atqtS9zVbs6XDVH4rrFY8ck5irJddamRmY2Njg1voTHHdePsqizVFhvTLW4Y",
  "key38": "DZyKqAB74a8y3KJWydEvKpV92jGVWt76CfYjXP4tLpmAMiatv1WsgpjnYnNMxKqKzeuaUXSJVa37BZ7C8JaABNT",
  "key39": "ei86eRzQut3Zqd8mFhStgDc2q8aBkoTJTm8yXz1X99vL1ZYAG9F6zk46kWmdT6mKw6UqjZjLguAkisS9yQhb8j5",
  "key40": "4eA4cVqye116jrx3tmvgqmUJJWbE5JPeejdDKVyNfZ2eeYx9BrZDzwtJLSrFghwpQhHt8XY7aNmnLcREAobYfhwK",
  "key41": "2zcuDn4TVBEMUe4Zes3pJriMjm72pPGpYZyXYK7DFC6836kLKn2fxrHe6MxKj7EemoCivWYXDouVqPvNSmStMSZz",
  "key42": "5jCsLBxNzLzvEPbTymQjt1Dy5UcXL5MgJ24aBWgf8VRsphTG8s7QmFSEn4Zut6v3LnTqjN5txZkb65TBosTkVVK5"
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
