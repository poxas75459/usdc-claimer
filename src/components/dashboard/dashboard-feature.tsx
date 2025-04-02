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
    "2jcEZtQWzJy9Bd8nfLVYwuKyMguXYdqY2WQSBN6Yccshb32W9d2e6EyWMcwaN4ZgBQJqV1Hc7s6LJZGhDK3BvKso"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nGcs6HLCpwfQy76NajQ6Lm2CB2hjnrXch18xN8hfGZobd39v8Sm6uG6Co1VHikS1cFHb2ftyHg8H9993iSN8qRt",
  "key1": "4fLtPCA5jy42Z9SMFXPjJnG7z7re1sFExd4Lp4uSzmFPw7zjcfnNRMxktK9veqU5jG19YYEFmQg7oruTnkCnNicE",
  "key2": "j9TME9TH7RHP3rG1dKeVE8hUFiJgqJTytrd8Rt5tFnH2hUp89wjBEEfk7L8d2Pe8HcZc35X2JKAXc2o2adQrthN",
  "key3": "4hAEYX8YEWvPCUJkRX5BP888QeL3wNCs3gNBxuDNq3RTbCzj4ADTYxCufhYbbY39UE143j8PJvCXiJm3CSyD1mkv",
  "key4": "e3TtgwcRgaMTPU3dz5HRtzxsibnqcRNm6r44YfJrPypBm9CuvaMxp66dNWqeZvf6gyh8BomHdopjxdoxSmQhdiR",
  "key5": "3133PmupQzMizM7T8raEE9YFmSgEqDWMULX19LJR1FUH66aheJawSDw9TA8v2rUYaFTzGLpzD2Cp1NcPKKEDLnNP",
  "key6": "56uLaQKySH83Yj7KUyWv7VjEV4auWD6QwGSQHVrj1iTBZYPkZd3AQBEFkVrieAYhrAfN1AyYwBHjWe5vsZ378P3q",
  "key7": "5SRvtsHW7GkVDN3SwiN7CsN9iJCL6b61sRd369ub4EySV75Yv5oH5jjoRmH6wzPfDG3E3rB8s2bZXvqQxABxCUC6",
  "key8": "4867gdYSRAWYZAcKVam37hELehB7gwYF37JorQewjZ1SdoZp1RVWbh47QZX1NRcPCTQDhnrjKNKYWMWvPz2cPCu9",
  "key9": "3zkwK1i5mmwtmrTnfAWYBPgifWQByTjqxFiFKGcjUfeXttFg2eE7HUHwpJtYZdPdvjCUVaiDNzP4uhbU1jbvqADW",
  "key10": "5kkrDcKXfz9tkgGbXRkCCkTZWESahN4XhRabEmx1pfDApkcZtgCiQZ61ufBqnfRpSYMUUDBdQUwxBMc7BVr2noSE",
  "key11": "43PMLryTYKiY2wUEqSoU9fZ5kcekUUCB2FaD5cDc4C95oK9NEYFrGZ27GegMBnW5amLKZi4dL8dMvmyRX5Y1nCxK",
  "key12": "2hQmFfQBAcz5qXCpNQsJeCHb6D2wGGB7AjUf4jXYUCkxgPvBQV31VCuQgWiXqYoTK87B2rsmLZcwyJydedeTkEce",
  "key13": "5S2mZvGx7cv5c4j38ocaNc1e4LdcYDo1t3S6yebrWtwRhRwJyjbuGZUF3yVE5kAPRo5THi9eKboR3aLwgm8zHMww",
  "key14": "2eadsF4xLoCM5BL1rgnWAQUz6ADHz5c2AsVWetNDnRwAQ6iwE3jK7rw6t8tvcbXK1bpH31RfYodKS8hDfGix4WdY",
  "key15": "dSgP6UKWgymWsP5DAdJsTHxgXe2VyvMGA8PLpn218FkzCjUS8e6fmXPduBsYGbto41MUTwS2SGcH3wwbdJA42Q1",
  "key16": "4Cxy1PnS33nusDNe7ho6awGPxjatSsFjnaPzYWjY5Xrh8LsgL5LGmocJ2fePA42PuguHEb9dsYV3sUFp6hzk9bx6",
  "key17": "PbxsXTWHoFCFSdLPaVjfMKwb8uxjMjp2ci3fFRkW3DXYuA6krs7ccewtPm8HQwk49j6p8XjgAyUKuosZfiuLVyE",
  "key18": "1Kqd7rKwYWjtStcfV5T8Z6vhNNBj4Rhy5Kfc7wMHKsfHY8KBgkEm2b9HvK9fRyqfBTDS5KWbyhkxt6q5VawCV8K",
  "key19": "2P9ChWgUYaNjcAjR5k3FFe2sKGkS8ryeKkJ3bnnx2BaiAa2rJL7sEB5jigoTg3u4VM9HS1z7YEqS4F33iRuNew9d",
  "key20": "3KufzNPofBw8bvQnaE6xykmCkmyxzTh8bwgxbDK67w2RhghC2wHtPbN3b9NhrA8SqTAWqgPw2FzYUvYUveux21ky",
  "key21": "51ypS3fsdjSoy5Ltxr4XWug4rxqrnb3617BCAbnAdNnUomj3zFxP4tNST99TBML17RdfScPUHVC8dVmBYJX6fZDh",
  "key22": "4eoJdpsDcWKWBTTGfh3yECWAhP9dc5VEenC9cdEDWRmoCyQ8i8DhtacCyV7CDcPrEhdodT9frvWpdKePXwkizKEv",
  "key23": "2MD5gBWi73aa64PsxVPEtmakdk6SSLWyrvqg8VNebobQY2eZno5emPwgrmAaaWGdRWTEEH5Deny631Ytv2aMvbu4",
  "key24": "3JwViJ7WEqPPYTwexko2aNMFzPjoc9G7BSyEaWJaCzCjdjGQds9R81tMTqqeMs22DqHCdRm4n1vpDVdMHmRUhYvM",
  "key25": "4bACSkXHJ4AK248ERF9WKVubxQQWXmmgjbMEZfEqA92BaLrrDwqQKVoj65mDBQaeKTyDSj7AuQ5THeZ15U2V4RF5",
  "key26": "2LmbzMgqucS6mMeC8USuzWKBrhnHoahYrbShdZNrSrHsWGSc1SiBNNN6ddFdQNxAniqWbBfXoACzNnLLa3VT45ri",
  "key27": "75ci3es8nUehP45L2mvmoXhCHEGCeY21xHi4gLGt7uTcPaWukrY6PSFkobA75HePejoaweZNeqC86gmExMeHW5g",
  "key28": "5B5NWr1orBptnF4MKD82tZL62tvcjucgYZ9C73VcPk3b4Hjd98yuuLmwhEYcTHbQMYjekxpFEHNJnGS2ChHagC32",
  "key29": "2Xd3c9yEVC3MbWiSMvRPQCJsA84SWxB36QNWy2HM8aoy3QfNABEAqsK5ZYujcjnQZP3AfwstzQYs34HKMpngjnBb",
  "key30": "5EAcFmiLzdv9Jw6oq12xUH2jhctoZpcJWMwZygx8JFryPPNoLQZTXLxP2AfeQE37mn6kHrjAYghJgYBVCwoEZABx",
  "key31": "5qdZGvYgKEA9o6sn13Hita4tGdGzXraFQ7WmLZRpC1H9QUiNvubGTnAcgpStJAkFcLcSANK5zEFmjiuQnTJqCzNJ",
  "key32": "5uGPE4Ao7HV6vtXJcPcwGdtFKUPjQxH2TSHaqytcRTH7n8B4TdMHTe3gJqb59Y6r4SPXtQAxhWEdUX19VcFQNBwa",
  "key33": "3UJyB4Xqy9DTh7zKczGmC1juzmbo7QqCAPHL4Yto47JxNC13dcsCSw1QHoKxyEWwDMJddp21pLFoBRpQAWsGMzx3",
  "key34": "522Zx65xMrVmT8LAJYZpC63knsR9d28DW9uhAdFx1yPtHGbFCtc3TgJTGjVQUJdtWHbmX9oxb5pFFBpfs68qcRia",
  "key35": "4PGjoCgSZwYdvTNqAfRraHSiibzJohqQfqMc8BZxy3Lm63oFEqRhBsR8RqEa1YuhRj4LjpoWzw3ej2MnQyzd1WK6",
  "key36": "3jeVHogKCAExei9w2Jqv6RsKExDi6uBk5bF3d1uuoS6hkeMa3fM5im7M9JRN5i5Zo1chekCz3rN94J2aHCANBJdi",
  "key37": "5iB7gWYM3FZTLWa4v4dAeZfCzRdEu9dwAq7AbBcQzS9AP71T2k9fnUNftDnLux5pMKiNAEi5gPVeq3DqU9tkkG1x",
  "key38": "5ximAJdCp9qvXPW5iZ328hVkE1Lh6dgZhDKdfoUC9tq6bgK4xYdG4Tp2VAqKLUJNKzmDPXq5UT49uGRhGBYeGB4A",
  "key39": "5MJTFx8PYnDZvAwFFBbt4EydQFWQLgur3XNcySqaVp2pkYorW6v9XDP1qaTRkcZsAhqrmsY3VKYZqYMiRprY4Fm8"
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
