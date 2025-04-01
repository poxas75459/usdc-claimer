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
    "4yrbkpMxdzu4FHGCYmVhGLFnCnPM4DczEpyJHNuQ4Jtp6EX7WDS6hPenm4zj2k41yosSaQpGxhG49L1zYnfKMitN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KA6sFPMF1xywu7TykSEySASRpP1spbRK5HStRy5ZUqMxF28KoDZBQwdnjFiZu1D3heAuanvrYca6LkezeSH1YiR",
  "key1": "2mYoNsNwzbYKU5KE3jk65pzj1K73Be2TcGhSi4BfFQxQaqnd4Fp1sqbHmYvsS2hMSNoAeUYSUC8Mo9zaZ3CsBoEc",
  "key2": "25PK5UzwMk3HqGoP3XeFChaN4xpTMgghrKRkSbM6Awzwmo8mzMnFcSJVxTFa4P798ozZng9wu1HmDUPK2VXDREAW",
  "key3": "4CGHEr16jTS5qGbkaK14iqyYaCFLoqijCijHwEbxyVHnaMb3XHSJmBYvGNSn4FM1BoCBQvSpQee68fPg5ovgoPzv",
  "key4": "piXUCfCZ3FzW5zFe5Jg6sZapTSoshvEyKZQ9aq5c461FY3RXrqq6tbPd7Zfib3da6RQ9FmtidpzoCg5tdhdU1sp",
  "key5": "5dgVekM76eFaG4hHsQdVWw5zh1hmABNYSMBgjDHCywYS51UZjNXHhaLLAkJ4hTJu7rntSDpNT3cfte2nAEewxLgv",
  "key6": "2myvRXyZW9oTiaBnFbfGpBZPtBCjxSGhEZnFC9htMT7zKVDSCk4H8N4QkmSxgG6n4c8Au17GBTJb9hVkvGgmVJwB",
  "key7": "4guL6DaJCMiXGrV8YwwzLZ8GVSex5wLq6ERRf4kUogfyvznPHb7iDDdkAVycK2inKjMaMkhShShwxq3x5MhkXVmZ",
  "key8": "45FsaSmvWoGRQbwwHSPBvbZryXF13HW14VMEWPsXGEPVDfhY6jStp3HBu9KGjhSBdrmrSn8rxXTUQNaGzGTkk38h",
  "key9": "3FQCSjytCeDCiHPQf4TDrXC1dd6imhWTdaqzPfzB3p2KnbwfSoZPLjqxWkWjdxodvpBkq286zXCchYVXTR8KXsmW",
  "key10": "586zvTZd7UCadqkAiGY9TSQbSBByrDeFYx6jnHB7qheVDbUgbrvohShoKm4JEWatvoLjREgoCck8YXztPZmJ1RPR",
  "key11": "1feS9w5fyBoZ8pTjaedvECHbK6Vhbs3pQG1yMxmeVAfrob6ew1tU5aSRorQXKFRNNDUfHajzcGQz8HYP4ESVUiW",
  "key12": "4amG8BCG7ee1aDVc9BbG81sKj7kvZjMah3CjYsAiMgwd6CcivQqHEYVnfGAp1mUBFWQHaWLjrcCKej2iRSCpWUFo",
  "key13": "3g3tF3tLHcxdwEjbBXH6wBeryn4xcoaU4toG82GXAGigraTxHgUSiK1Ui8deee925A8MQs1BvidCq8g2RSqivfwc",
  "key14": "3Jta4eLe3xq1VD45EiKQ8VvE6dXTcJ5m2qHW4vrjsen4GJ5oiK67Afx9D83PEnTngHfR5AphqDcEQD81dxyTNui3",
  "key15": "383DHqrv5BbjDvzKS5wigaie5yAxoQipPZTbAbhGrEDbbxgYxAZqJeM7uNdixugFTjnBKQgUCL8yFEutKK5d2ZUy",
  "key16": "2QX6gC1967Yj8qisqg2VuwWUWVWE4zWLoZ685PARhAwK2CGV75DJ1eUHUF9NvuqjjsCEuDtdhRberMJdCCU1d1Vz",
  "key17": "TVMuyYvH3oGL2kHozoS2fL7FqCFGEcwYpxR2yMQhgY6bFJ4UKRobqypVwPF81rrhX2gN99G3QGcH4tZHsNQQLEf",
  "key18": "3HBKMRKC2QHieimCCnXeCD5EBcdkycuLMuTPefMcbixCPCtdcEerRcDs5z7EMy7JvA5VfCa9V5iMK46rEFgVNn6V",
  "key19": "jEVvcTcpatrLwKbtCa8eKUdJae3wZ7TneDT1oBsi9L3TaocFoRDoRuF3eGsauJu26p5SdSzVRtxe9yRFHDo4Lvc",
  "key20": "48PkFKoXnwnGxJm1Va2pgxjyef1bPbBsqYnVf1MDcT2kxwrqmQAi6HPpBNhWWAX8rbVo5AScsz5hZ7igLBiXAN13",
  "key21": "2n3qTGPmWMUaHK63ry3zHvKnkZy1xahHf95jmn1LzKxXVGsG4dwqvbUM3ue5jGoS9DttUyLjLC89EUYmYMAsM6ER",
  "key22": "B7MyUs8B559L67bsxqcpGLgeEURcXtiF7hBUkfKYubV4eFVxruTuDhEDMFVBDyvwv7mbF7hfT3vB2d7zWJbqVfL",
  "key23": "Dw6Bgy7KzESdjh3UnUBWB3Ht9oPCXBi4uh1Lm9mmJ2TUGgdAtcJ9TwSDii2aeX4Ekm5kvMjpBtKCvUo7jMfGfa9",
  "key24": "2t8KzPdF73Khg2mmE3yT7osttFvf5xa2tDJ65CSu2EApmjC9mHCX5YSBfFtdqN1qLzQw78rtPJruk3TQ8v2dWyLx",
  "key25": "3wxDpTznTsG3ef3nvhu8xbV9SoRAuE4eRD9zURSVL1HT28WdnP6bwWpFsdYzYw6kEdHUMeGaCq4K3YDW8tTTdmNW",
  "key26": "HttqyAbQgx1RqACJGwVtidjbWkFNL7QPrYbxsBgTQMRPGp5GX5Td6tEoEXCBrszUVQ1gr252aXoR649jFfJ5sAE",
  "key27": "4s2psSsHomH5NVG7mhd5ghX2Ci3coU51uCmhMtebagRERtgiVie4kw19v7NU9Y72itYawrvwkWJTLtcYBsLWUtxf",
  "key28": "j78tkzdYTD3asK5rgg3yctRnxJ7w4k8gND7HGdgUyyAVs8v6Y7sFrQC3KhG4G1ZMiPd3QrzUGfrcLxjRxRtaHnG",
  "key29": "3738XAxTFbHJidsD7M27wWXiwQaJYJRsKoHR9VEZKbxqdXzwJpMJ3V7jSKcdQzAdgk3b2aWtiFCRdhR8ooQn1wjE",
  "key30": "4XDP4ekVQw3y4dd9Mmbmar9tzhhd1Mo29WCzNVgLpQUBqjgwUbHdz4N2mrLB5BN9KALhPG6zZ25BTDuvnEziRhDa",
  "key31": "2VEauVYk5aPGgF3XdSzet8sH7GqJ81Uamen4ueL6pPRH7UntygkvTzmDuyZFK2629qbLgPDYLkEWxofoepWdWjze",
  "key32": "4DsedciasDd4owGZEgeABRurwY6JqcyAMR7YwREwWpSJV4Npupj4DpZCFQGvVz4AkhDyBdMuuVhqwbMUm8eQPyw",
  "key33": "3miW6opJ61LKiVNJ7ScJwucG765Nz9n69BgAFtr5SBN7dZznHzxExYU8t5hFmwRMJ6AHQNTws3BhwEVnVFLBpjDB",
  "key34": "2F1ZE8PA9uGdowSobtfRWiLr3oVcL9bnj49oB1wptPFuAaHPoWJxJYA41Qroiod456CF6ich9qhWYKQNEtcUphom",
  "key35": "5dE3C2JBLfuRCY78sNMQ4Bz5y1kFWpaQtAYN7NUfWmgtGu74ajHeeGSY22R2fiTYcAtkidS2G2qqQ2Jwwcx94Pm",
  "key36": "5EQcQ5rtfqw85x97VqWGMtQguSPfkY7P5XpRp79V6yWvuWyCmzj7urPvxGLi2V4AsK8ivbU2xisbTdRKm5w5pqoR",
  "key37": "2t9wUPg99DhaFqMuAKCDJFvFXLEqxX1sCKytUPFzPRk4c9UNRemHZnMXTKvE4fFyThKskr7U7B11idhCq4xdrYmY",
  "key38": "2qhCUpGnn77sVEuPkuPvoAguGH4PbYzZAKfeqKQYCmTnfq2byq8uYS5bQveKJE7Ssadem6Vdv4pH54LV9RheVDS",
  "key39": "4e9XPsoenZ4r3s3YqDJUZKwHow38VVNVCps9GgjU1mMoKedbsdVgoV8pEvEiJ4D52QuRff1YnfSTY1eNzrWW329p",
  "key40": "5x6MCVn1CKK7jbG6eRAsGrd2fa8vmLEsetkTVyn6ueuj8kSx7YkYaqhLmsFzBJ3e5uJBSAqJurLWxCVibioXqJeM",
  "key41": "2GecAZP5SUmrLwzYafYh25egTuLDN3z1QRJJ7NMRGsESKa9YvuaKPJnkpU44F55gurZv7de61cRgMe2eaP1MfQGv",
  "key42": "3rRYgRmXVcbLoag9FHGWdXZ89wjwFSEprEGsmkmm34wbEM8t5Edz8xyRVnnKikh9vDgEH5YmWSmQdDaooNsV9mQK",
  "key43": "5aVPbs96tv2zsdGd8RQm8iJqJV7E9DDKPfzmfbHg9GK42hmaCWgbDvUVCyayv8f1drvS5ZYCC3AHWFdeqRshacVm",
  "key44": "4U3uv7WBQcFBeLjbuoo4th6dAQ3WQS9epfpaEfcN1LWCejFZy6ydzM5W84iwZZC56aGtQpZvyJaWWYaHXwCumn59"
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
