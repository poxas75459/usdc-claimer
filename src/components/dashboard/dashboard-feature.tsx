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
    "pPVyWwq6qBfrz2HeTWckANNUq8pEbxnQiUoEYj97898SNT4eUEPrx61MPmtn61zZ8j56ZDxnaDy25yJAj4Ndfaf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiWf2U9B7Y7YsG5hDkz828scKHs9hd14hrVoGcVf6F15bkzwCcm4mzNhvn8kf2ouGM5PDKnJskCRbYsTQFxoyEy",
  "key1": "HGS8spo5z8vcXe7S8d72o7Z6Pr6GEqD2zEAECXtykhrACu1sKAUappucQmkVJ8TifhKia1VuwyeCokHhX1Wytk7",
  "key2": "h1vPmuLmp5SgTLhyyiFocwoECap4R1ht3t3n9JzwGwvJ8kKyTBgfPcKKhm1Q3mRNogtmNkRehb9YzRRd4dqauo7",
  "key3": "thvJVV15mJnVxk7UBRByVZrsktLr1ktsLtGnTiy6sKmqKWNJyEQJEVZC1naaqFiSNnBXcUUHnX7dRb4eq27kkE2",
  "key4": "64GrgXYA67U2LA5Zf3hT4q1V5FjxCKH52EyZguC7JHoLyrt8x2JwVMynjU6G8vRWGvWoM9RXezpHXTFGDidFCqyU",
  "key5": "3Ga7EWTvJAb2AN6QrRQasDqDcroQUgEoWbeZpqbyPvrgUx4eGJpcmCn9WT5LyFbVNVo7KWypQF5beZRtSjA9T7ga",
  "key6": "9y6FTVUGGX7C7qpWVTVvZ25TH77GkYWw1ewSThn8EbbFQXyUBycD7Vp1AYuBxQuQJrGWkVw7xYT4cCijAigHrJK",
  "key7": "dGYuCfqrTDmDfY2hFnRPxLGJwcXQB7r8xnDugQLgzCnNktNsM2ArCyg2kh2EoCTCDrnpu4yXjVW3YDKL64iHX2n",
  "key8": "yNko3zW4FmprHMaLf9TYfqCeS2Kfc3gtSG6fsL4S2DxEXaK5yrdot7869d71KfHGcwtDuCt2U5Gh8u8rasS52Uc",
  "key9": "12639DFtVxQbLm2kem29F2eerb1dgiGtF9z1daUy18rqTygb7aL4wQzmMARffLCAXzpWNGd39wYwWpJCeJGbU3uA",
  "key10": "2T6xH7pw6AvvBnU5aPDUsVAhEgkpj965FqWooNoo9rf9D9GMtdDn7rKtu3Bw2MoV6eF9yP496559E2rMs368TE7a",
  "key11": "59oSWqPkU9qbEa1PWFbbYcHqkXvpZJzzCLDZztqG9dpj7Nik4ZCeLZbUXCPkvWYdF9izEnhhwLBzszVmqBYQEi8c",
  "key12": "5prp8nYCA2XCE6SSoW13dodbVG8LbV9n5v3gt1vMfc4LPzA6Akv9sQCoHibFKXvwHs75Uiz2pX6opAhrcUuwp3UQ",
  "key13": "xVoqxcARD4gcdLo6ZRYeEgaJ5sKwadfycWzL2wjJNzmjBmYTppg4CaYTMVZqUwfkHW4vAfyEm4Hp7pyP531zveX",
  "key14": "531UMW9KTnDhVdgSeyaATnZZQNn5ffVNRtNPdNfXzKmosQurN36z9j2aveamkacao7dLfPFa4UWNH2KbZ5A7T1Jt",
  "key15": "2FRoUrtYaS1NmKbkENDA8yKSUdvDaAbGNrTCaq8NFnjQChuurbbCbAE3ix2hCeVNPBRuKgdvtnCMtZYh4EQuC7rB",
  "key16": "3GmBsDNP43YfCUztvJRNBPUTXUj1aAZVYB7yxLg423haeRRpCAJK11jbWQzsxEj3BGVUWQ5HBxwAvn5MdUPfBbUw",
  "key17": "DacediGue4XjYaGRgx9eGasmsKr6VbiDbzyeTt7CstuVpnex94TsET8a9NmdcVcjY4SgmBkbwDpRUuJkE3hmAij",
  "key18": "3V7oKyQ99W5JNN7iDpcTzQhFrgUhQfCDL75AgnoVfu9C4kEX8A2xxR6skohzPqYZc5zJFnERLJP8uiWedPo5rUC4",
  "key19": "28UyHU58kruJiWpGBmpNucvMVnQ4eFMoVYToAKRsmqhdoDypnvomyNQ8Q5mqYN5LXsW37858zcACErGFvDUmy8vN",
  "key20": "rs6yvzNx8BX2aouFe8hh5wvDunkG7DX6EiccaqWqegqUazjgvvH5z7K3i8eZjydXGdVPXLE34TyuUotDTaZwk1E",
  "key21": "5bmNCEt5o6xXo6T2eKA2NDokNiLuhM1wsvCyk8XAhCHvJZw89RhoaUjREKviawQwDZEPSEJbBz5mSpTBVmeeq6rJ",
  "key22": "3sFAgJ9pfQ9h3dqMWt2CV5QYACKykrtR7PdLjsQFzFUE71BLrLtS9izqxjyHvvuHvpq42gTjgrZR2MaoQhSegi7N",
  "key23": "2hrk1DaL2DAWnAtfDumbHFzkV2BAXj3BVwn1NskYR99yD2cAExWtPE1w3vCpm8WpTYnrJ6c5AvQGqXUmSnBZL6SG",
  "key24": "33b89eXcoodhknytF5ZfJxcGg4tcLojYbgkjANRbEhcz4PDhszT4mS24PugGdepEvDowVsN7m8J8d93UV2fzBorC",
  "key25": "5GVbWSxGY3u1Y4juMLPHmhS4NaYeupy1asVvdRRqXAvtZePnaZvmuuBbcax9YmXEaUoqVBDudSLbFEyrSC6DT8CH",
  "key26": "53Fok3kdZcZTJQKXYFtw85NJJrXD9pJ22XDu3SYJPQagwfGyn2royVUL3LTyGmToocz9SY2Lk4RxFmfDasQXopVZ",
  "key27": "2Upxf2XqxCgw14RaZvTp8GnhE8XZzPxQfdkivGJSEubTzLGKdeqnCY8m49DUEsUhhT42BmAqQiYufbywiV3WYX63",
  "key28": "3n1kMizN6PHiVodXLMDV3MxuFJ1A5tqnDNghJHFUUEqM693cvv6HjGS7eopjAaLXmQZxbjmbcBzKykCfgTSbVJas",
  "key29": "P9TtM24ZuQvCjqR7NrASbco5KFvFVpEBnutDyVSRZNPe4UeYmEXD5fmr3aPqFuxRmQGSfTR7yqcy3GDPVF5f5RD",
  "key30": "2cKXtfAv89RrvU9mYsSycjYnztUNJRNKA12bdEcAAFDtDCgJiDp1yqnBZG7BY5s3y5L2WQHXEuyaq27mJiHfHVMv",
  "key31": "4QdRaDXZ2LK23pexEwsk1SvZ14XZpTU5khLcUCA1t8f2xBp7cSgyyrt9VXxBPW9UqqsX1EZ7zk87iSMEZEwJMny",
  "key32": "437yCYuiGYdPTFmY2cqS9ngUKbBS5UYCzEus9NP8h6j11rqJMbiofV9fMM8BRB1eojFjpq3EBTwVmwUtfUQuRjjd",
  "key33": "34VudJAPBSHqcgBhnTK1k7So1JmeGhgWNmxdYroX5MUJTanHdyMJo3fz8xAGEnU4JkkYRA8QPXXh3XNc8C1frakW",
  "key34": "4pGXuVCnTaAD4XUtLuxUKAN755yDE6aTrLb9FCY78N6GFRPhD1pLyJ8fVkXg4vTuo4yidWX5kcLK4jsnx6ZPkWZb",
  "key35": "dAe1oTm8QUooaA6W8RP3DRJnM1SWmaZ8KKXTsz9fYp5RfL61wYoXPGcYiTD149EXGepypBN3TLBfenRfnJjAtNt",
  "key36": "rbkeEgsaas3jLZzYVksCQAxeHFzK4EounixZHJgAyyyf2ekRx1E9BbA5PjSbusoWRtdVexZDmKjixo9ktPDuaBc",
  "key37": "2MjSGADuymx5rbLBJu4d2qtkpFxdvRauCYr48VpigYfg4KKv8kyCT5oAuwwNqxfd8cfTECqYjqMGi2Wp6s4gpk9T",
  "key38": "67gH9t5PqnXZ2rehuS8FQPP3XcpP89V1SpHbGCuhqBmZcJRNFSkDi8oAaGNpxWMuGR4nPcA7ZBvHiKFLDyKADjYa",
  "key39": "2EZyzjGq5BU2GeAzh89HGvBmPUk2mt4Gzj7cREqMAXea3jhUmp9EWKPgwikEnMyxTrexzoZBK9RVy75nojaxCZ8A",
  "key40": "bm8pei1pE6H3EHVSsESd6CAX3bGfau2eLyDKGK9ZKS2wGUthfbx3xbJHSSQfZZL5YJcJepTt8jjvT2TPmuJXUd4",
  "key41": "59uwT74nhba16LLv7EFrPJc7ivbQGX6ByaLryYAxPoHJ9Jyu3DyJSFaCFMPbLEdGryxpnFVRFppxzWPaaDGS5geg",
  "key42": "5WaQ3HdeQ1ntLZifSdCWrQvhS9XedEJNfuyppxpeax1Fe9ndnWSUCwrZA3cZHDDQgT7diEfKspUxksU9rqw8omTn",
  "key43": "cgGzBEyetrJ7Bao6a2qc1N2BLjzm9VnscwvHcpGzUEGNDuQAeswLxgvGAv1NUmko8B5EH6i21nggxv6BLEZwuyj",
  "key44": "3EYEU86kgNzLYj75UBYBVsZ5Xjq5vQSWw2mg1Y3EConzr9ZrCpQbX8DtoXqADvtrnNPMgeikLKVL33zvdqBb82dy"
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
