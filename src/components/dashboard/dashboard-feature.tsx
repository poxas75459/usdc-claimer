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
    "2qWFDC8Q6UpnFJSonpfzCH7nNjw93BF5anF52wFVPLGSGPdQt7pcaADPyyCjV5tv2GdQ1wVJc7myNMC2kxQuMkVi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a2XN97r29jKpf6onWtGR8mPRJf8iMGxufzsERYVwMGbKjcMqAxowZ8z15kAwYpP7SWfoiVhtL7XF2asS1J8MMAR",
  "key1": "zeqTp9Ey1ccMjp2AGSKDdpm8XCxvmRcyxsBmFyh5y4N8zqkH3nFV5xGVeVGRsWDZ8rukLr3sU9ZSAnNhvweSgVc",
  "key2": "8suRMTueZsiy1MSkqVajyMLGrwDvDQefYjMggDEP6MrT8Ra1ax6o2ePLZUpeGgF4njRz3cnFxeGsqxnzzDK6emR",
  "key3": "3y4FSPSBWov9UY7dUk79QRtQbxXiASwDej15KmbA9V8hZD16mKgYh61LTraYuURDjeNnsqWUkJarQ3WGqs1NpxNy",
  "key4": "3QvnYjoxnuPbFfPgDTVhsbLB1LCquULYbiTcErPmSCihrCPxUq6STgSWAjPkcRm7LC4WToHYLi3wZU3CGoxvmx5c",
  "key5": "zn864nZomz74FTK4b9pQcqv2YHUnA8W7rHFYQtMq2DyiGnHAKe8gS5qFEEbs4eTiQ5spVfduUCKG6yPcVsu7R2V",
  "key6": "2hQnejvXZiWqdmenFCphgq9sNpi1N7y9QXmJ7QgKDsjW48S3PJuyLLFC7nHoJ4t8DwGJjGnsVATTQnqCcmkiPfD5",
  "key7": "9papbosR9WamqwP4airJqDCEj1tzGiDTtCFPvKCPczv2XXUjNEhgH98fpTrz2iFVvNVFvC74U1bG7hkXj1eqXML",
  "key8": "o6V3yGNFHTtrQenGGTsmtU2jRctyXff5vQsDzdBFXFdfN35mrWr75e1ckvgNMnSXoKhycgWFJ44YJtRbf7PrkyE",
  "key9": "4vtQqj5EaWxAeFiHmY7QVzvLNz7zfym2JXhUSeunTGP7ET59v6zRfTBWjDFnS2U2PT2zvDk1QnArZxmCF2bwg97U",
  "key10": "e9z9PTUZWBpmEpoC8s66hiX4dKKCaXse4UVpXpxMwL5DqNJuq8YDL3RzsSPEciCZETGaVKGdSoEW9eohDFRckyE",
  "key11": "4h9x1hGaicgooAcvcvYYAHSwsqEMc14TniYGzpgZch19jfeK3MxFWNYM7iyhp9GFekVAsT6ba2rPU7ETMyagQpd5",
  "key12": "Nr95NZG9us92QwzQJaWqD2T1v2cjYuVcYTyxkMAdTjecbEeUGxNvNmy2wjXt4yHnNnoorU9Nb7c94VfJEKPTA9z",
  "key13": "7dmVY9cd9QvCLB1Xm6SZ8ocpfnffgJbXfHFV8TNUhquk9s35ecxGQDL1bMH5zSV7uY2PGmf9qTF8WAuTJzZ6CZg",
  "key14": "2hFMxAv4HichkwKVLMQjQUVHqCerywUiUc15FJrs1s9TCDwdgxiJADXgfX8uJWHYdqaisHELLozWboZ1YzSiLqRy",
  "key15": "3BEHCq6Vy63Rgn2mLZYMHB2gL3dBtGdA5nV7kpNxtWgB6dmGKg8aL7vNbjTuzccRJREDicRKHwBspQbvdBXhNTRa",
  "key16": "3yzFcJQ3jqS4kWzaEnNXXHeP5Vwd1i3wbZZGs2FqRkdykGKRkjKnP6yHcywfrMXGpeHFT31TJhsjE78KNjX6CX7X",
  "key17": "5sptjDxXw6bvDWh7Fi1UytMDyW8SYgyDsh5HENphBhaDLeZRMiUpHKw3uD1LpQrCQgueZqaX3NSJW2kXfH2Wguu4",
  "key18": "2PrAqhPZYRRS3wHyrZiCcxj5wvL8J1oFJvbA4NFaGMj2RX24RZqxsCiWAjCeSjjp2C3mK4BZEgqSD3rve9ApLXfQ",
  "key19": "6179AVbiYtsyuBuqdwhUofhjfaq1HfT1NAmCQHyGEzAc76g1nWzUzZCq33dbgeHQxjsBnFUG8Xdxnt7VQXMp5MxD",
  "key20": "3RdFes79k91qcDkMiL3HCyLBJWZnvm6GiJwHHSuTgiAJjZ4AgJnFcshBfZNMDK7F5k4DcY23RuaQVksoNnQq9aH9",
  "key21": "4Kc3akAV2UP48as3X1HbU9UfZsywKDHrmwmB7DDU1QbRXNz7UaebFGKkM7kSJrXdNUg7YdQreAYbiFmRGn2piSx9",
  "key22": "2okvFJP6MQFGBnDVx5Q8NARFKUdouFuWJXy5nYgSoiYE5idkmX7do4enQZovhwVUo2RLTsH2PPYrbXu1NxJcafLg",
  "key23": "5QjiCCT2P3ZpUyvKsXN8uYX7AauckvmM8yv6Yscq7kzQ3RvwfXeqDJSzTx9WaHVA9YGRBdMwLvmb5e9azFRZmD5F",
  "key24": "3spvToyREQeZbfBzvvhoAkUbFhB2PqiYBEFXhmKbky8j2Sny5BRKaLzmVpJEeBrA2vkfsoMWUGzeU66w3JgCtoV",
  "key25": "58aCf2kDWRbS5o4rGR7Ecmqm12zr7gBYxjGgVgV2yFBLYXEgpfCkhbfeBXLFktJDrbLFAqLzTSfuhYrUb4WdCiES",
  "key26": "2bWZUR6ToW5J1WzvCaJeL2hwUsL8yvYWVDgJ22nJRTW8wKqEkungchd1wgPSRA1TWskvPyrx1TcW7MdSWZJhMgTQ",
  "key27": "4NysyGyqLNRkmR5LDZVV4HWh6iWtutA8XcVS37qBb8DPAdzi8Qzqc4LrZGXSEMxp5RyyHBNFhdQYEaBScvWunbQD",
  "key28": "xXTaxMzVCcfgegC54GGy6XpGhYuG85NLgM76eTMHGnL1W75a6mekULsGKeSm2KjpnX1vsKpovLb7dSMLXxNLSxW",
  "key29": "3Jrby324jQdLCvc9iCpkGKMWFDSxsAubdo2dFxPXDp6EhNtkaLvuywQQRQxTFCQykYA3Vsposv9CeytXcwbq4fHR",
  "key30": "5sPwvAU8N8S1WUmJL4scLz7LsFBTeJmNutQboh2Q1ZhVKfTa7Bt3mJAMFk5zFUzBFnHe3yChpUdHJbm8H6u9VFrk",
  "key31": "4ZiSckYncWKoQaG8bx8v1dkKyEkgUXMut9MMmzXK4ov73R5YCsUChTgDRbWQ9QjmNvpRZx8VvZ1pLQAXHEnMiQCP",
  "key32": "2uS2kXNPS5cvX1WFhPtaCZLtAYBwMDcN8GRQxuf16GXS5fuQVAn3QH9Gfe6EQ6ZEVAiqjmyGDVxCzvPHbQ1FpZRW",
  "key33": "62Tt7xBwRuwGPooVjGHDNfkZGeJsiSng9cEceagpa5wwwaqgXJoeT6ivqyVXj3hW1vszJik7uxnBz6Xce2mRABAq",
  "key34": "2DDyxy66SqRmarvRwznWUkJP5Q7rN4fxeaCiUgPjZPwpnPsmUopopWiDHNyJpNZH7zVbK7SsY8nqFVuMWtkCAAVo",
  "key35": "4zqHwnYN2k7tD4jcTM3WmW8TQEadygYqR6vaRdc12b6qG98kxcr6L8ZewZ67AL3KH6Jw21sABPFvjqwpbuW7GQzF"
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
