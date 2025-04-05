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
    "2JdHuqoUC8zgmo4CdaJVnjqjbk5pHi6NvneFxKAJ19eED3aPx4Fkxu5dnPDW7pvLfWNvM3XQCJjkkxs47p6Tg7MR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vSdkXye1U5rp1qwM4Y7BZF7gKbyXCA5KznNhjN9rbdzAtEvDTmz2jTDQsbpBRDMHZk4f7BY7C2zP3ejtYiFhQhG",
  "key1": "253dvtC4boRntdHJFNu2v7Ae6t5eHTE7jcPyoxCY65zFup9nEHsQpbVp7R48QYbbFMsEASxPC5LTg4gGPwXzqySD",
  "key2": "4kUiY4BCiC1Rt9opVwYtH7nx68Ra26atZWahtsELfiBBux15svyhBX8DjYodXBK39YttzqwhbpcZMsx3nBHA4XcG",
  "key3": "2fH9mQMsDQRSTSKZe4qtKERfHchCwLpSxddfwgsVcRuHDfP3S4XEuxM7uPKdivi68MTtdyxDH5EJR8HQoj51pv7u",
  "key4": "35bnFUE1pdEyHbPhLYFX7XPhkCH26C1bYMkqXSev4Jn9JNHGn1o6ETeS2NQzfqG1FcVGDYa4zu8kFesoKjZrfChP",
  "key5": "b4QEgQ3JsBhvFR8jrMbXLWTWquQeEgj3JMN1dZtftx46T1G1PA99AC1yeWL94huw4Fh5sUAaE9iuDB5MEj7pR3W",
  "key6": "Ag5eC3XHfGNT36ERT47wpXRtEukGmvTLdgNRc7xhiCoUGv7eUSkWVDa1fLXxrwBNBiGi2KjUMqXVVdwht2b1nnX",
  "key7": "3f2Yjeb9m2DcFxXEmkzctuwYeFd544tC1EtxztoQHMc5dNWjAsDsSQB2CiWEUew1LDDgVB6G82742RU3iXUixBz7",
  "key8": "2NWXsNzwsfTguCRBoAcMZGtmyjmcuiNG3Xkzjd4mc6bfP2LNfhaXAjEs7nS5yXPrFwwXAbFdWY3tZAHEfwfpt1Dj",
  "key9": "2asisCAzBoyxqSQk66unwTM27tNNHgFGTLNASixedvCP3J2gdPHWvwLFTwtrFoj6skMLkadgeTbPeEC8S5JXBSdd",
  "key10": "5kqDkp17yeJnFrueygEqYuv3BR1Dns3DNF1oTLEU6yfYDsk5w4bJ2SAiYHHsG14FfByE54Dg2TbqBk8XnW1h9xHT",
  "key11": "3vsJZtwYUsjHx4HGNFUnEEK8Rj4gm9wDx84kvnYurbzxPGabrPY3t9P1UuT7NMPkcP2k427od6FxgucjaSNXqtgt",
  "key12": "2TvVD8PZhbzQJocMwMszoZKBBG5ah55qNfyLYL2YsuKKoQHpcT4Ly2AR16gbQhwysMkM8W6gjhGPhBYucihUKYpz",
  "key13": "2sxrQExjLCR27LxGmKSaCc9HLWzzhwUrcGRKmQARPfJkTae5J3yv9tZDwgSS5xzxruzfsgc4STrbNxR979ZEYaaK",
  "key14": "2heG7rUXbbX59wuHf73kifJQU4JQobfaRABLsyy8yEyjrV9nfRgWa9n4ogZKf8HTp9zGk53VBkWxxgksg6F4Htk5",
  "key15": "4cKhvPwo4hCQLtAWFQf5WzYKX5X5E3yPBq1TboSSFst6xGNtVHF3ZtNsFwLWHbgPPPVc1fRBw9nkaBmwQPq3JSx3",
  "key16": "4Zd943etq8PaxtWr2UJVWkzQAWVFZChVs818KrMBRnjF18szrWGRfgf9ZZbo7abn1vNG63ad1QXn4o13FPCLsW7f",
  "key17": "21kdeusEnpQk1BeRo2xnLoAtMmDBM5UgAkmccPN9pPVQBdRyZ4TM2vTDzH1GX6Fnf9WqhxBeUkSQwdddvfmd7uGn",
  "key18": "5aNkLi2Eykqec4B6xFAbWXdE2QEaWBw44hPBJgnrfteTyMbSpg2WzzgWGHUiVMKadm5VER1vZfezoXwyPL5wmYZb",
  "key19": "2BuGqcKmrQprFa29P1kPSgrMhiahBpyojcMF1Woxy9ep16JuJeJiyEGQP36EoCvmUhGeAfQrZkgCxx6sK1wvqmwC",
  "key20": "2yDftMspT9KoaKQ9upVsms2mkVnAbraG2qB8SV6gh1RzQHHSQeTv9ugCAbyMnHz5qcFi7hqqgf9Sk6qYNEScQxFV",
  "key21": "UskVWKw7MbsVm91cFHtVRHMCrR9J4upNidLzjKcV5c2ZPaiHkgLBFQN39v57jwKZXhigAxoMFa2RX3gtyccRFEe",
  "key22": "3kkJnfexi9GJ9UeQQqvHSFC5EQoUnaHQhAyLsW3raQ66W3RRyCoJcXb2m3NuKFXTa9iBwZf5gJrV8NRaYTk9CBdq",
  "key23": "o3hnaSKinMWe3zL9HHfSGn9DL3Z7UsBZMiR8vbeiuCGmysC4Tcd6Szetqao7pQgKuUcuy7Vh9BJnTbB2MgRKTMs",
  "key24": "3azY1SaGXxY2758kQRc4TPVor1BnaSdeEwmN5ZqXxqw8ve8aNsaB9xSDSg6aEKnJoq9YWG9DspxCpv2PTwdwqTnw",
  "key25": "3pNfHE3taia5GArWWhJ5wTPHodrEAoHckZU9jnE61C6DGFEqdgAPzAaMw7eUfaxNs2qVpqgHiG4AgAZvgzN9aXEE",
  "key26": "3nbF94BKu21pRkVXTJJ2UyxKdmRBj5jcHaRV66fBUci4MJ2iCSBapwji5NxhcJn9y6ZkbmDeLK17JUzYrwgkkbJ5",
  "key27": "4LABevwXhPjwWF3W9gJ9iwU9NYfWwd6isdgTY64mftXnFJgr3pKKpzKL88rKgun2nx7WyB8j1MqU6Cy6Nhbfqmeg",
  "key28": "WfSDg7pYSD9HRdP5mNyEUFZMAjc8it4eEdnSm8EhFkjku8uWk1FLpo4pwmxMHWSumC8a9ksK69iVd4FHuzbKoxC",
  "key29": "5aWWWLbVoiWQ7X6tH26U9UgwVeDZt4jKAYvZzgvabprXQADssurvhfGdGSv7AwnzftXMmYn9w1oxFbQcQ2SP9eeH",
  "key30": "3q6tmQwoX7X8Fjs4ZVGuXGrXRbzwMajSNsKpMJEWtj5jJtSKBQZKi8rGeb9Buxctw9qXo7didEvpV6jtEcsmyuuY",
  "key31": "64svmu67LvCMnN63Gn9fDMPfNpCAGSj4wevrJq9A4G8tHPGNwtXmdpQS6u56rxmDrUtadrcgKKS3Kcq5C9DPPZbH"
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
