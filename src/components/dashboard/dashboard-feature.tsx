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
    "49hzEwkUG7Eoy31ZTKxCyBVDFEhB2wiVotZqJXcd6gUc3eCDpL3Ew2jBWBhJcmdJzKfE348M34sVfKpDFECdbQYW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sa1rW3ByzshwtEWB9E1AC6DLEqKgdhitZnE3urk5HEX3JD5eheGQx8FSSVLbb5eGqfGUuX8N6uESFXmiPJbztRF",
  "key1": "tT7Bd15NrST8XpV4FQRzSeDvC7mwJgBCz7JRAzW35TgnUoGSqPaf6c1CugTUY9D5C9zgLyqeZisgL4Dvw9sJs9n",
  "key2": "3fBd99Bcv2Y631zoWhNTHKw1k3RNBcSBrsoVJVBBvK3R4mQKbAfFHqPD5B1zCSQ44ciqSNqK4dLw8Xu3v6AW3JFB",
  "key3": "3Lj8hd8uLccKHXMDmz1myvhLsczgvuaddf8m7aJNpN4avaBw8wM8y37qSUA26ngdYG8XhzkKAuBqfFbp4yJH27Gd",
  "key4": "44Saa7F1azjVbzCYrdyk4sk6xGUxN59iEBHVUwKGAYzD6PZtfKn7zDErRZ64EmdqcKHXLVyLvvPzqHxHVaQ6j15Q",
  "key5": "WQt2MTjrb9WoTDQNGs1p4hNuM6Ld7AXHtdiyN7piMM3niT7e88SZAHRTYukCbEuoT63GSmkFAHVddWefvFkBJUi",
  "key6": "5wZBnsQad1MEeTVMBi5iNfUQZg5cRciR215jBWzVEf9ESawLyKcxN3sLmJHEtePPoqeWq84dJoqN3gigf4zFW99i",
  "key7": "4AF8iWHApnjr37Vsc6trWE1TzM7SfFH7Vy5iQfjzek4sQoHBLfbfwimf4BkPChv1UWwMUgKvSTdXvrsd47ehb9W6",
  "key8": "44r7yxVzgBH6YXgKBkP7fkhjF69TbBsVpFiXydCSKAhHKZtyHZJUhz97xtz1L84HukZR9uX9vNbjUtXSUceP2279",
  "key9": "5Br5aCQGgJQtgaffJw7uKG66De5YycFUS9WNTHqWhDceMcajsXXWePm9icYsutvwecvuLtqPi3Lb1mJqz5twGVPw",
  "key10": "2XhcLTaVDcCoWJSgGMkcoXMfFpSUz9D6LuCKnGPxxjRXedzmKY9fg16Uw31CVpfuuoMTRC3yqPK7WJwNH1NychKE",
  "key11": "4M5FaUxT86p4Ga3roi1JUWv9TbBc6VYZwpFHAvPBaL54MputPQ4Z68ZepP8Dt9oF4QZcq7TAfLSwnLf6YVPtoCyT",
  "key12": "t8HGTQ54AFPvrgT5SQFhdrEiZDGc6T3gW6sD9P1eC7sH27j4gmKP7L2TCChCBhXvDa24FDJzeKmc8XpczQTZFys",
  "key13": "5iWHpwHJAkMMwVKZ5M6iRidLaDtcyAEnM63sD2AXz7WQjiiKoU7MF8PLMB6bjrHng3BAjuhbcnxXGUzgr1abSM4f",
  "key14": "rkCJ4CNDT5gU7nNuwVsNHDah6xLbaGQrCxHk64xJjezofh6Ueagag2twmL4i5BPTF5fWf5KyuqMmPT58LGSQhGZ",
  "key15": "2fgzFANUXkTTNaWUxhxwqBL4vevY3RMwuWTzq2ehYibxCsueFvicFxe4jF4yRvFbzCgtbRtfRdgKZXXvvxgD1dKo",
  "key16": "WsYpBtUxN2yMdnFM6JRjcvvu41QFH5bocGK41LPHPNnoYBY2xQXs5U7qsnc6JZU6a7xqorSkbWogtMoNm8cWH6W",
  "key17": "5nZ2JSs6NQWziDG4kDSWrMqqRHjrYuiEnbG5EXUp31hAwCTY8nAAjqqBVtDLSCbsGaVGWc2dFa9wukoGScUrFq1p",
  "key18": "3EsGjwJpb3RsZNf61YLWKY1M3qasmfTDrB5Ce7ViTSUh9TXWsaagaXUkWVHTai6UrXwdrRBj63bLJboW9TmKVL6F",
  "key19": "67C2BJrrEiQ1KeeZyvipE5fvYqX4s3PuwMPn6hFjEnDsbDxpaQYxMN3wGsNJSsTp7yA2btHDs2rGGHSiwB8jvgut",
  "key20": "QzuM5ZxgFiFBwwPaCKRCcBjjdF5gvcqSr8avy79i29boKvhhLuicP3jMMhkM4Thw5cXCe7KLHwU5C7okp3tjHZ4",
  "key21": "3atXMnTn7or97PfJ2usta7yYowhaWmX3L9NxZEmXCpjWQzhVoMTiUAacg4ewsiSPzgAmW5HHK2gx1uTJgKXBwsPg",
  "key22": "BB67YiZgV3ik93srxZMcNoAVrv2JiQ9HzYEYhzQZvmdk826X9cR8pKyNyWw2FrWdbNgUVNq3Ks4VQrRKVuscbeC",
  "key23": "VznND4f5dDQFJm2WKpWG4nt2MaeCwxvHUkci69bFTQ9FwCMLXvW7ZhtbcTi4L7KBLsh1jW2wXUtmpgsJdoXi65V",
  "key24": "4bbshkSzwXzohZ2zp5u9ntot6RHLN8x5H54DHNKNxdrSD26jZBhQHs3eF9CGvmpYtDx2MKJCVkjQqtPJeKiAhVu8",
  "key25": "4C6Q8RnpK43YQTKErvqh3rd4EGG9u533UjEkW9TQTgdWhz8KrELDdKFtAovptBya4u5FTAcm2PYhm59JrBBipt5X",
  "key26": "2u5xtC1dvb3EeFqW8DB54vsDeMo3NfQcemizVqLuwKmByDmSYdqvkx3fXcQnrTUZ7mcqi6T94chU6wJNgWvQMs1V",
  "key27": "55EUG63hwLNbSkhfGA1bmrWo7ybyo8GnjWFLirbVGw6LzdDnEqKdcaH5apk5VpHZgGymNNuYtPoJXU6ecw4L6qjG",
  "key28": "vmJrQSrtLZstqu4vv8v3oMvPrc28yXbjPSTFkyMRuN1gaVNksCzsxstu33HZ6KG8edcjviJg521fPWoyBANMShH",
  "key29": "Ds1qwtemc6P19UZGG1iqXWjpdYeTJ5hJxQn6FLMtVhqRvAm2k8x5iHha3Sd9YentHGprgN9fvJ3LtwokEduFNsX",
  "key30": "3yGvEWLL4XybVzG6VEEeoQGyDUyK8m1mbaWvrxbBwoLpZ36BvZMbZTr5hk3eLMp8LLXQxMHCK13QibzK4F2YRPJ6",
  "key31": "5eGXm8M7RmuPedfBmC7UXVsRubKxyhmkze5Yw7f1jnw3GbTtswdKaL3Bxg5XMXC5Epi5AKevU1K9aJUsHz3v5L3H",
  "key32": "4Q2bp6CAhFgrTgb7VsbTqMo8Nk2UKiPxFFJ2kQ5EeDChzpD8aDpxpqhuMihBtMLevXh6asUZRvoJZoFKshkGMYCi",
  "key33": "3Km4zceSKqk4GmoEDGAXmk4LqP3TCeDg1ctDwjVfT1RHFxjaivPPZYFREHQGsPB7viH2pEsFQvcFkh1GeZfZX44n",
  "key34": "SJLhnD2KwNS56ZJePUf3xG9wbuNxSk9R7LuMtk1a1enHZ85ChT2gd8x3H2VRdtv5z8L5kgND9XbypVsUZjMU4nk",
  "key35": "32Tpqd1xgcXpD35LSqGSbtENZGu5FdQ6gqDTsiuhcBDemp3he3LGA5zDDdiU125pR8Kcpri8s9rKLmBwzwBkyitT",
  "key36": "3o6PmKaQowggqgNYEjsQRC8s5UnBXQ4S5WHYD3K8b5SUDuiM1m7qCzAgcYo71wnqMQuBBHEyKjpxh3DKipmYNEKi",
  "key37": "2jbYiXZAgSNhYcEJcVuNKxmu7tfvBRGL3n3U6QcUg9DEkr7Rdo5igHpV17WU4QUd137zD59WGrm5oMn2NouNtKNH",
  "key38": "cS1rT2RZ7VyY8hS43TtZfnGZNGCuuzqS8xSuV5CmHRHeTyfpYdpQ9V7Hzdzk7FejRFirxy7XZMuNk3ayRi891xx",
  "key39": "2xUitrqtHF7d63XCLX1pNBNx71TiVbsqb265Y72zDs8YmCrsj2eXCDZUeA9mxKjvVS2rT97TH1DTNpR7g9rTnJqm",
  "key40": "5Cix3FC48sjydsnoXQe1CyzYFfxRmSc8KxRaw7nTK7zNGBtfHBzeoi1Lt6SyfGDFgKPvdKyqaCkEq32zNm9We9YW",
  "key41": "456pPpxA8DLS8V7toiMKaj8q9vPEFZ9j2Vjo4ZDudAbbsW745Vfd3b1yXgMb3W4T8Es7ivKHn3udgmzqQHv6gfyU",
  "key42": "3ZZhAvo5omqZ1ENijn6Rvx52c92rdCRYj31KAmoScihp2GB2EV6D6zXdFWUzosaeQ58kRDe3jcV3fZ1n8unsNXTD",
  "key43": "F6fefNqXHRpA3qYGtodtA1SJJt48Ai5171h7Gg98QBnLdE3pvcoynfVxg9cvM4vDCo2m9rpg5iSxbVu5QrojECa",
  "key44": "5U95iQZNSDpFoN23CD5S9N2AwchKEteLAcTRKa2CuTKTpgoP9QugZtWL9hEXeCmccGa3jx7qVL3CFbJzXfpihELw",
  "key45": "cbPG2vHJXxD1m2jpUaDTQAQx9kLDkZoEk1gpA14PJ4XaivwdpdqQJ3LR6ivKNKFUr4zvBVRhe4jXUnPs4eGoivp",
  "key46": "FrnsHRS2KiBwDNG7ZucjZYMJCtVgBtdLD6aBsVji8teJYuzbvifKHezim3bQ6bPYcJeVBJ8gBmMFpp79DTGwzMz",
  "key47": "4HowLHbd6FS4FMoTNgVUCchSEUTi6maQxp5vN7MQ7TRZ3JkbjVnnnEWFWTJ5nKo4nWGPXwzkDkrpix4YvTfDobrh"
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
