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
    "5SoL5K7eW4KTTF76s7F2YnPtowfikyW5G845tt6JXFZ4CAHTssYNGpt17DoK46Zx8kGEiko8bB4vjqzJAdLhwvFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Yb3ufQWQrDs5hvEYrKXZ5T8EApp3LDzEuQrcFQdcERNb7NfVG7cMtZf1wcECkXqoU8JqTVK3Ssec96kQQznQTAy",
  "key1": "4arDqGqv9Pv6b3HKDxMFTBvxA1YHvaB5As9WnZxVAS1ofJdqbD51sYj9FdV4B33xAjqUVsvXiDS55QnxxxEDpFC5",
  "key2": "RyRLgSwFh7ARJePm53Zj1QP4t8E214gBSDrFKwJGKfv4bRMmMob7mnAcJ4fCEC9cgHqGvZJ7Ek5eXbVUUxzAoV1",
  "key3": "2ShnoPCQfJZqRNorDqG5Hdq3LfbvDGjrvE2WsW69ubghBEtRe51AfSQwabk9UKYUkqgAHhDsTgRtaTuZY4nBavvd",
  "key4": "51ZS1r1XEfTAFyKwXKPK1bZ1BGjmJ1cHNWgU46Z3LmmkTKFZH2PTJLmwPScc7GPBTuBAe4Ehe3oALN1ArgwxwPNs",
  "key5": "62fMR8YtnLULausWodfGbUMns5CqWkrvy5TkqaRRckrfsQS1EwwsP5Jet9Z15Dcif7xasDr3dBaz7uR5zNC6h5da",
  "key6": "3yTLuYnLtFNEcJEVKxBiWXiRF3DFPxx967rHTocbCEubQGWNGkD71Tr8dk1C48Q4Kqvz1EZ2jBpcibofqXVmt5br",
  "key7": "339kaFqtt2aVqhJkTVWwZamFsafedJLKQwbSxAHk61yuWCwvgDgvDkjoaMXvLHdLhXb7SuRq215iSaEXkPEU3dtd",
  "key8": "2Db4YYngiPpfxSCw8TTkiZCwVyK4ZU1EADozjDD9rYBt8eEoekEsSNZ5V98M3Zf8286yTsE61dDpbwk7XM2CbQRX",
  "key9": "TcCEDdLB88nu8EXrWHK7kUERsL6qtWMAsZvqZk2LVuK2ah8qtcheP8yDmNQ16khdhxmofiA9wWk3tQ3yM3r2qSo",
  "key10": "3fiVqFFp1QMkVyLM7t5Zk4tfUcaoGHLfhWwXFEb5s4qwtp3dZkjaPauqxw4ukrGwKRHRMVgguHT4mSdSL41su8tt",
  "key11": "5JqhW8qUsPfF966YL9VQnhvbCkq11HCaBdGrthuoLZDJpXA9TTVKZYQeEKSbViYMmQ8JTVGw6ZFgBMGtXHx3dxYR",
  "key12": "65wG3AACfrr3hiegqcz1QCsbRrJeHmqRxz1bhDhqGdzuF3UR3Li9vmtyF6tVqkjVUeQqrsJDREYE8N3zU99UNtAH",
  "key13": "5QnZpWhafLLGi7bts1zkk65spAAegFcKZ9av8bQdcHXCapnDMtgRXapMt793pkjrxCEdXCLVeD6T7SMyy1kFaLEH",
  "key14": "4RQVmmbKPNRJrE9rQDFuzbQWJJDAvWS4fFWNYjPYcSKGSc6soQ7bDZaqX1zhdXHnm4MyEXcxJVF3UeXbMZyW4tRb",
  "key15": "3AEjjo6eEa7TsUonKZCPwxUqv5BBjoFAQkSi4odJVTnDbahL7cVPsHdhCH1nr7rc63Gk6pJEzRdXZuJAGb8WWVW7",
  "key16": "51cpFs5fTGA53ctMyhDSDx1zvDC7Dyf29P7W5vsBj5ihBiH4BDx3DtnrS79cQeHqrgg3WjvEG2qx3uiqsVDyP8n8",
  "key17": "55ujBk9aiG5e88Wco6QCp2oeTBbAHJRfkDkEuk45Z23BzBPgkmu8A3vu96X8PdcrnAou1jivPXVsips1V1ujMiRy",
  "key18": "2PYTqNHkDetvuLaJzGAtwV1vgnVCeUFJ8vgHsTpN957pvB2ySrj6Rt5mg4L6bcW8xHYaW6BZgrvduS7pC43PTs8E",
  "key19": "49rJ169dP4neNN6Afi9K4japRy5mCPHr5znk8Tby9ZQi8vHYwFqdwwy5tLYgW9W9pfcAEcVRkbPTaZMLpFmrJrPP",
  "key20": "nz2qByQD7Yj7ABkZwgt5htnFThin9QRkYRSRyAe7SvqpestHYYq5mqZjHjjcgB4Jybe2L5USjMFdq8EisDbKZQP",
  "key21": "3NPrhab1xnVSqUpXzKM1EbJ1M8V4rWuG5BkoN9hNhrvRYvD8PsCK58xw2R6q9mns12YQAfRobYqBfn4KL9jcExgo",
  "key22": "5AGQow4AbWTqmpnMWq7oZJb3v5teh2cixUHbsfaK2yywHctCpNfSCx9v8Be5qB7yuAXR3g5TX7DeUGGbxiXxLARR",
  "key23": "47h4KzKNWJnKAUjRR6srMagHaGU8c6jotYrK8Awis2XjveRVqXYDWwJ6tk9xbH8HAgEbbeHH58dV9rEMqJSVbnJV",
  "key24": "4CaWpMT3bziRLpRE8rBGdU2Av96duvfnHKBU79nhfV6QpTynDinfMXEGn3DWp6dg9DfV3yp9jyyoF46CwKhE51i5",
  "key25": "2q5T7Vg1QBBDkvcFwMN2NUD8eZ6Nhp5MXDbwYuHFsXbv1iMxb8jg6jGn3zDmHMu2LgUz61CYdkp5BLyej6XmR4q9",
  "key26": "3PY3B5fXKnYRniCnAHMu99T4Tyt6GgtrattZxiejT5EfrNEqdXgmF1nVcCtrFzBgHkaJ7GKrvyAqGFY9r1sgAYxE",
  "key27": "2z32EyucfBUSaNryyf2DiUqtjTNLgApWg76vWtKM5csnkuHuiimP8DFyHvQLpP3y41fRYsaonSdM2dQHWXJMQx2Y",
  "key28": "3xaeFK1z4WVsf3nor8XCCZfrcvZBajZAHYNz9Ms3YKJ3Pu56YhHynTh88WzCaaQy3XM9p2L6yMo4JXNoU13ioRVL",
  "key29": "4nCLoeGLerpZyjNTHUroeApNx9dufnEyW8eQtpKYqffCQCPcxdxw44JGQDZiMuUSqxpr6kan7zJEFUGuZ5WPMw8Q",
  "key30": "3ZWTQRwNesqsjt5TMNUJBRg23dJKVCTErm7QguwMD38aLVqs7bKmVZzaetXJKXkWhZ5wnbPkddmPGAQAgPncTKcy",
  "key31": "AhUsmtm55XxdtKPhX4AuxDFNpEPSLSbjeWgB3AGpBQh5itukxpeqo2gaV22WP69zUhMyXB5QJN2b8J2vUaWvKsG",
  "key32": "3qMgggTcthBVQNXc6XGzZ2So27X88P93R8DQYQY3RJNYA9wvq1vDa51VQn9MY1Q62xfmJCLscdLVhC6yPxJWPnLU",
  "key33": "5qncFsHXCaFgALttzTDwECkn88NLtL9KYQ1YzktpXjYErB1LNgRqdSSnsvHJfUwF3Qn3xY8yTKUCGdX4sKrgHCSD",
  "key34": "3xK8d4FWg2L9nzeRghGDnuw5hxLWcMsUBHMut517EmKbzoYkHSHyR8aq8FCmDAdCoPGFfEFLfXGnKAPjvJEMZSZn",
  "key35": "5bRYic9v1ZHfL29XcsZh9Gg1gVY6Msg9deZSaxUThBFP1AxySNvpgWHoSXn5YmkVtA5rcxGc87LbH1AMCXDp6kkV",
  "key36": "4rEnsYdPLi8jbixU6apbAaqGPyizjbwpAeT4qy2MXj8UcWci9X6MtuES29yYgsTpFRNkKSDNGGUfdopgobpGkJCh",
  "key37": "4cVmyBwhGHwHTThUkk83nmXrqfi8xdE6T49zLPyg4jzLBVpAXVYQfzBojdHxr9Qqi8vKSoYebfuMCu5fCsVACfZJ",
  "key38": "aN1NV2m3iCDNqusHNTR2ASmURXeT25pXSdYup4oChf6F7icjZQ9vxKbY5DqXsTQZTsZ4vXGx8xL9A1P1GFeEcNr",
  "key39": "CAaAzXMXRmH4a3ZiHWqD9Q6rtmdUc6vHSaFdbZX4AWFDtm84rbqBJbQMkhomdfz3HCD5G42vJohBcbMGBD9a5SK",
  "key40": "4sL65Ry6FrcGy4zvbaJwUULdvqSRTBUUeGqqMVYRZ9mm5Ew8joaUikjfUL39QJqgFFjjV5ZSXccYVQBTJ1zt59nA",
  "key41": "54gA4UbsXeeAMApUZV9scqRsVp1fAGbzrar4Vu4oqYDygf9dbbVDtpUzk2kWtYdXjnVtgyFXvcHjU3DWicLNmXfh",
  "key42": "4J1Sje1JeBBWChQKXXhJU8SZgQ8bHprvpeBeLzA5Z4jgE2BVpiSmuqL75jovBArJP7PbP3QiKji76d3ChZWF9JuM",
  "key43": "2yHyKXzoXPHfkke23b9g3wYJ9dNASUZXcifxFLuYVXLFQRnYuUwFJeHbKR1tKx2uFrAEF4ZTEDhzopS9osUtV6YV",
  "key44": "311i9fhxXUg8yqLpSZTDHmL5fRxLP5vUyyTpJLmNZApkX63FeLR62sVs9dEuaCTasvHRbRh1xoxF8o4aD8eThQG2",
  "key45": "5b3s8CA3JSyHouQcaXiQ1W9XvMLKCH3DLAHMyhtNQqqRdF2jsAYf9qVpstsVeHTpqmYi4XDe6TWHctbBguDhBMVC",
  "key46": "VtubZRTVdkU2U7mtSKqGtVRAt2KhnKhcFZS7nS7quS5Yv7Qnv5CaZE2sHfDWZskszWGJ2tankanC5Fj2GkyjGh8",
  "key47": "5MGJGy1hgsKiy5g8VEXP2dZKPkUL1vAgW59mmZohKLVxHgedM3qpVJapox8SfZy8hdxAcVQYt47JQGZHS9k4V2ds",
  "key48": "62ykTCtcTVYNijykrCiVw991KNWDng8yJAWwhnpxYjQWUNPJxt22vfpqyEZFY5xp5xB9pfCfmUXqFn77mXYhkkpQ",
  "key49": "WiYDpSZLxpF29E7e8e4LsbiEAjBgyiaSzYUNuKT6gjHKThNrseuE1Lf2tGBQeVNsjfRhzDA2txFA5beK4xdZkRR"
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
