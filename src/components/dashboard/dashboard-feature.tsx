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
    "64Xt6fX9CTvgWj7vGKWjsZMsek3oqz9nUg2pvSrJToKitSfdvywhL5q2tt1atSpqcsQiZpf7PyyYvjQoqFwYoKuC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yhoEdTnLYxigFHqraeM6dEJdYxniRFw9XZ2Dn5NvBfQQMHVMtY4UDH6TF7x8KjwBMWaUfwipnLPrn6wnfkiAyBA",
  "key1": "2TyaMgMqL5VHcLsNzHNpSBbPCjyWRc1RFG57Mvb2Wd3GtxDqbb33bEVupBajyS8GzLjQ7KSvusvo6DUtk2yUaDRQ",
  "key2": "StXazKjfuMoN9NxA6cfvi9KmZTgJ2yVS8atwnEL2y32BGkrB8Jfe3WwPTzbZnbTABPhP9Y6qG7VMU5tTYbmMbCK",
  "key3": "4yXvs6kKsoMBP2pNTRWzCSr8jXJu4KY85kqq3bnFcit66wXMRpJEC7gFxyiCFgx4rW6XPUizxbYAZeAVKrXWuSim",
  "key4": "3hRMCon5BrZgpu1QL9s7sx8fgTc2oj7ARX3kQ9jA71bVEk5Hif5181hXDBb6kCxkvAFdjrvGjFEXY6pE4h227z6Z",
  "key5": "4JwovdSpRLgaBdLSpcqTA2vxBQkrGAD7mBEDibudnQGyuyjSDQn5nDiTDaK9TWLDiNdNhZktbJDyessKKR8rToVK",
  "key6": "5TmSXFm2FD2mW3Go5WwrtepSw6vFxzJDH58VAS1gdrcxDXZZpmSUC6k78NHtfty7hmMAXp2RoTHHayjarEwP9NGC",
  "key7": "3oaYmheajsmfhXkiBssETYkw2vPEifdPWwrpfKJpBSc5gMsWqKUuHZrDGfZqtQKQ1uyfysEcishv9veBmxreju51",
  "key8": "rbXPSRFKVAA6vk1SVq2s84zDiTjTJqQDze9sq5Nmj77rivBi6YBb3f3oJWB9CDo3boKmUtTscxzUjS2Bf6kz3ca",
  "key9": "QSE65Lp1tmZHZsDf7fefTmsKnSEacFrDTK7XRzwKUVKnEbLp3DAPzLyuLfWNAxL88jZ5LdCEdQi33CHsxLdaZpJ",
  "key10": "49wwx4PW1M8PfoXydib1u4evdj7w5i34GG9QTyg4MGtu68WMXhbR91aJKr9neC55bxYfGNKwQiXYP98uCD5JhhCh",
  "key11": "5kFCsmHDWKof9QVR35fjkF49kJju4inUTWTAmVk7tSdDYNFfCRNF1hS9XNA7HMGd18vL41ks8HbTqSQQhSQaSqgL",
  "key12": "4ZP1aMSjbzenRnamyNweXJb5N66VwfH9uSwBZjJfqF1Hqw8Ji4x8GAGC2ZW5fSPmR1VgR829yMrRmdnweeoiDPTA",
  "key13": "46KzCUrWBo7JaXE38FbXKugPq8sjS66htA6TYE1vuNFXfmWcRkk8f9iyGVcdU4sCUCoXXWtKpp9rTsr3GTBLTudL",
  "key14": "65G9ptzXJnMozCLyeh11PJy1LVCynaTtFkhVxT3pFjdmungw5TymoWPUwqzAGfVUB5zVajp64x9i5J2gFYmuuMGm",
  "key15": "5pTnriHa99nr8x9YeuBHvDSvNYpoqmjNxy6BK38tCvHjDfLHNRYQwU9GPSW4F4EoqfR99ct1GUWZnGZ9tbDQsUdd",
  "key16": "5p1MPCtfh2T3jvTFVx7LwAvCuYh4xTX8v2md76hyK4qDJBgZjQ4SvpUdcRsAzBwNj26oXmRB3WzLvaYbW8qmqh4d",
  "key17": "5h92MedraVkxE3JDS4jeHySnnUyBMCGVFJ7r7D7oD1MQj7dBuGzbGiEUN9ZtTi7eBuW4PRvvNJANn2cZ1WfoDK6z",
  "key18": "3qGyVVTuvH7LsCApyRF96kfJriVNdnpNWDF12TbQCPFjJs9foeFZeLbwLaMWtnSU2cPH7pbvP3bCHKAtSUUMsKbx",
  "key19": "4J5GrnXNu6K2tr1q7qQsLGyR22GQniHuYvGN4LzDJC1dDC4uiwZm1Nt1qp3sLDR5ZaxUJ4cWewZYQMnwsPSm4UJd",
  "key20": "4wiU1cHfHXvkAjk6fTB9cGTvyfzAsg7aEn6f3LAzDxPeJU1wY1exueMEuq98GvdBRfMfAAnxKscHn1WjJv2dWULB",
  "key21": "3yrnbxCBAKLD4EXreqXNjWf8eLt9M73TbZKkgQgGCyaig2ux6MoheBvfv1xkjkoYgwm7RW3EaJtXBUfH7TRpw4r1",
  "key22": "5wnppkhB7hLvVWLMACaGLvHF2q9CvLaHPaXWR2XqzQxt736AMacR2jyyKV99kUv5b5BQVHY2btB1Sg17FQa2Ykfb",
  "key23": "2tc3nd6sji4whoMYqPvh3ncwceTubG32xmBvJ1vhq8n8w3vN9X1JEePFB1WxNB431heNkVorBcBh9jDtU8hamCU7",
  "key24": "2k6GxSEjtrCg4ZPJzzAdLKHBdkCtv9w4DXEsMDSztYKjbR5Cz9Af3aFtZ99X7kbzRQAxu6h6ZE6iFgubm6HpzYQS",
  "key25": "3xr2ABRC3tSV1PeeXFH3t4UdNxiNUHZcHZLguChXNTsUC9ypcPKQ6sztdVmGc1s6pSYyqmYc79whx46paT9mFUjd",
  "key26": "2rbwqZkskdrbU7z7oQ6oHoBwc2Hjwtm17rRyufXUUpm1ikMpF2LJ6dGaZFLbzkQtyimLyjtHF6RTQMjLmHRGrJe1",
  "key27": "5S5FtR7vx9SbSiJefdyoHMkzzj3pajo9i5V5vnN6JFwLUtfPP5bbsEMjquxEzTUc76QK1vnD15DH3jmCafLEsvBj",
  "key28": "5cpX81jq6tkS4jbmv9rWFbw1DBFVofD1jBo2Dsbhxz6zDtH8hHMpAPEJf9SH2i7kdhFLphdKbQD2ULvxpY6GrAjy",
  "key29": "4FPq3mSzb9HRpAnW4iiYZgB8qT4Fi8anXCpqi9BfxY2NKkaEAwirbNTVbasDsgfwcNnvCWN7L7ot9cziJ7cQ2oPB",
  "key30": "2aNk4MfB3q78cwuKgJGFg6m68WWrxenFq1mqaY4JiFgsqWhAhx5WKW8mMDMbSCSSSacc1UxsHb7ZyP4YoPqUisus",
  "key31": "48r4LhZSocnxAatYdXTV2A1YhiBWM9HMMMLtNUSZh17idMepqwmmofkgufNakzFQYhhtCUD8TaYoPQzWnZAibxn8",
  "key32": "3cnhJKtE7vJUZ62NckRMs2CY6gUR8fanveUtynXRNwaSKAHMhuJDRGHniCLNWGWREw4v5YdCE3fnPsmpmYzYELkR",
  "key33": "5Qg3NbdwBRTQHLLmwLLcEnAvKcT9CKqe9WHsfGxssPCB9VbUbVcAdav2zDdR1n4aKmfUiaPQDxgNu8HpoxG4tYNa",
  "key34": "PV4tbRVFYahK1agnJLZVKXSguoMep2wJcYZzGWTY6MiJmSp7VS9PLQnuiHEUs4nmt7dGuGLqAfFqnc83SqiWL8F",
  "key35": "5A3ZwBfsEduUqNkKsU4fYQ6hc1GfsqQvfnH4JPg4XHWc4fxt5yGBnvgg2be49BCKQXB67xco9qbPbZFtFxNj1AHh",
  "key36": "MUYquUWZjbSUvZ18M7seP66mDA2GgR1JybPNCL64WqNaDYgozES52aCsgyphCX8tRgr4nCcC9rRBtHnjAxam9aY",
  "key37": "4nCFEFCfR35sUmNCLCbW2BoxGi1bwuGYgCVfGRPEBqbua6bE686na8jVrPEmPySfiSFE3pfU5YBzD3cEThCXjU1V",
  "key38": "31KMVAbBGE7UjGGK34xhm33Sn8Rnh6VykZacReSJUtz6T4H8W5vqvz19x2ShvQbdNvtNj4KEDiiCFbq71A716Kk4",
  "key39": "qcRiDoNbw9XGyqLXB43EvLwBQD7vZVBMV1ne5yVtB39a1DKq2s3rDDQ2AmpReqwPLZVdjPejnsVmrXs22Mg5hYM",
  "key40": "4wLPakQE8Me6nvr7taLSLi4nfcjpd8ijCR66pzoUTKVocj6R94rnBMQ6TEX8uu4XV1w7pe35xT7PAHDAoL7ZWwmf",
  "key41": "3KCzeAvySg3DgqKrakMUXrhXg5cyAyfx5sJYhWfqNZF4q5J3R8fhc6vmk36QP4aZaPDf8nKhYgLdU6zUKvcYUkov",
  "key42": "46M58o3rmMQpv2czgSxrBKrauvjMdTexhf6GNxoHXrjn7uqVNB7ocQT6bxdMuopQZdESGc6Pku5M7iC7jemXvXto",
  "key43": "4cdwxmKMjzHJgQZqTKtdh3apCzWXpGPA5iLafoXgudD268cZfWzjN2gHkfws5R5vig3kwQ6bLESEhfDoWpTQzExD",
  "key44": "3PLizjycqw698zGnBe46faVWpZmhHJwrQT7X5j4aMG9kh4VWRbsG83r2BqPuyRFCKn1UsxkqbaNtaKiWUhRLX1wC",
  "key45": "3nsyR8XaNP7Ye1UfLSL4gzRNs817mXM27fz2ZBSqmzBwRFBs7isDKoZvFxMss7f7TkwpcE8Zgm3FC9Vdz6AvVBGp",
  "key46": "e9seL5FkPT5HekfuYKujQwQpcuhQGfXSDh3h8GcvigdDDAqGkqzkSJBytARj177DvrGeAUJc286JHztJ6ofgFCu",
  "key47": "5YJUtGam1zmAutLm64XS3w9stjjG1798Bxmj1ZhEqMuLRAv178Dwvxq66HRMK731jhMwiPMY4526P4KyPZvL1n3N"
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
