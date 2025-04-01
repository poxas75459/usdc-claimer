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
    "2eJHgieQb9D5undcFgXfU4B5DF5yzWXKzZZ3A8ZUWSeoQp5ZxdXjD8pFZv4gupfWVWCrXe8tjXn8FHFGaBcmYwGH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPVwuNBgGGWJtYCv7j32BCq9yC9jmkb5Zrg86kLtRMTg6HX6LyvYUgekoiokMoPUAPMy2HYNye4uv8561PEQGKy",
  "key1": "2bFJgGioCw5zy2ZeeftZoADYVzeRV6nhoLH3dgsZ3P9yHCndZZSUkRxT595YXdraK8eLJyBSVUYTgitXd5nv4MWz",
  "key2": "77ovZJQ5SoF9DUBtgsDBhnaKa5VpU6n2B7D2upWSpJndbcPu3xPXcRrUfhtNA8AVosmkA3HQBdSbBF8Ldz2qCar",
  "key3": "3QSLMazG5CuNVpP87csXTMxy9Sf7xxMiMWkSiConVurq7Ew3f9hRjCMvKyMmXRnNrBRkYuMNagr6G9m51xHd3oTq",
  "key4": "2npQvUTR1tGu3T9GXUffxCRUrfK25GDFjPCG1KAoRnXb7VaEpY8ZfrhK1guMGoYzqRtWv5XcGL2SPyGU4ip6Lipo",
  "key5": "5Mss9zXJ4PZU9nqsXJLXxg9LAPnx3SbgUfydZMnpBCuYExtX4Aq6JDmQxhz2kC46TqbVeE2tAX7BUVthcNR8ywG4",
  "key6": "3nZ6464wHykH2cs3Br6Fdtvvqk1g9byv3m4qg4qhqrVy5f9SvhWLqqbmTHSbpyqNaHCeJ888eo5eHkYnEDdxaQEu",
  "key7": "MfFcSjeZh7tJef9osJhAWCieaymf9JSvMPJzpCvt5UFzt1d7euzrxsyvfCoGiJmEsevfxm1zixHQiHLcmAWNHpX",
  "key8": "4E5j6fwrWEmFHxVMhoigbj8oSQvphtMnZLaKreCqnZXP5Dk5WhgRKUDmxdxoR7cAewhZyg7wDKeTncSvqJqzKcVd",
  "key9": "N58F7bquywvV9trZW2gr1DwxtkULMGSdbHyjutQWxvrMcbi8wcxBZQGXUDgFptKjReiscFfHuYPxyrJN3xLTxVa",
  "key10": "d1WE8XcRCWT5h4pvtvPdizZvAVTdiJb4brRNvh8J4XVVJK6oYm1oM4kZCFQeKizn845tCuDHsuHWhAkq6WY6ti4",
  "key11": "4Qsdfy4N28iQBwqeXB84n6MTEfC8TXKKkpdREAzAfckBAYHrRepNYwPk47DzZvAtvomrL4hJGaZ29wFqxZjkJC55",
  "key12": "5Qgpw7yZggXvGGXDrZuQssAyvMkN1Ub2Ue2zBiyeyh5EeLUFTLXyZadt6AGM2dTZrMZVunHpuT26GJfgLbWVdX9V",
  "key13": "2kLpDVH6FpRRWVzY8fJkVsXrwPiqQ2DKPsB6GEjptsJjqLHDPpnQGLK87dwUcsFgFapK54MrJVvEqe99T9SaAH3q",
  "key14": "4teQHA63D3vMTrDrvtf1qjDCqiRK4CQomz3YHpmTpHGQ9udpKzN7n1wCTDopU29vXTEMJpAtnrmJMgxTAHB84QHa",
  "key15": "4cWzYnK9FTgRnfRmLxzb9wZjNBWR2FZswxqrPRi95Kr5YscMo2qmMA39qFm6z8TxLJGkboy75U5GQ1YkEEUfWBK6",
  "key16": "2WJ5Snhz9anmB8aXEMo9PSn1VNPcgWPNf8sZf5RMrvRqzoKufuLQuKu7C3Pu81k427PP5VNLAUsbLn87Qy8ru7et",
  "key17": "5QBocy53tKJThvimXMBngbRjPyMnXtyn9AcKWp2mwQ6cA69e7h4Ubc3HRohRvAk1MqeqYbgLYiCL9hq9dzFWKa9A",
  "key18": "3YuACuf3GG7LZ4phA9tkp7mkRPqnH5y11wN58adau8KHCyoZjvjJGXJKx2WmKWLPfHXowJar2DdaPxm4WejWkRuU",
  "key19": "124gTA9ag7hFLfaMZMoznHVFfav1o3LU8M8bAg2PB3k7U2aH7S5tt3heaJcF4CpEvyK2f9qyiH1kh3vhe4f75mhq",
  "key20": "nSbW67pWbxjVqXJU5v5nJmXNLDHspLCeUqyuU4SE5XAoQhfGjjE9R6fkiTMUrSvoKYj3d5z9Q1959qVo5Y8mJ9U",
  "key21": "42udNUpgUWiKkyiRGJQ79oyvnARFpPuUQTcoSsxv9KjPiXSN9LExarUEyecJKz1RsBQZoqHUXK9yH5fSx1wDK5JU",
  "key22": "54ULt8Z8JXWJnHXnuAk4Q1DcX8xUcfuDZF3DKcV8n5oizX8KJVcUgCmoQ9y4fTo3gMEN31p375P3hf97Kqc9e54N",
  "key23": "HT6SW4crQCqUsHHyn9xXo5SYbQh5VB7qtS7oDJUWWDTXueoQsH4YrCdFBq4b9iagNqsM2DqL4TM5AJynDVozJ3b",
  "key24": "2vmdvU7bLVvkfp8PJqJQvSvtSSwEQAdHH1Q8s5WCsHH6Mmjnh4dUxxSxYaNUpkBQADZdS9t4nWjRUdDd7QjJA3yK",
  "key25": "3ReK8dWy4r38vTdHaExbFhHhMCAgPjF7v9LiaNRVEKAmAXydE3PoRqf5wnsK6weHRp2nbf56Qpt7xgsLZQxABUqa",
  "key26": "HhDFrQgavqEPbuTZS9A7aPxqMwS6WgTrGB2NuzGQBovs4pzqwLe3h55ybTRyTRHrQuvsnyJ3itgtb2WcUdHQWhJ",
  "key27": "U7WKX9WorPFCwD6ZQhARp8hCn8TknNVjWDyB3fLcVTWmTYQ8W2SmqFse3DctBk8TGHmikVSmuCL4TErJjPewrsv",
  "key28": "4LqM4nMPo7Tp5rEx15DXWpvPZfoEy87GSvLUFJHTEptyjRKjpMjvGLBVgyYQY5wwLsbYd564qjvRiXrdftWEBovD",
  "key29": "3cY3AGZY3nNywZwK5NpfMCu9RoLx24625fi8UZmvR2Kb9Z664nPPp8fBxqzPy7cDKpHVp9AJuHB2BDYQhN8vtWKq",
  "key30": "VJsACnFbSKjrbhYFWNYB3LcV71xLcvmCquZP95U1qCzExxhSR9pVVLADbghYmaMuShKjpxypfd5Fz9WVh2Xr2hv",
  "key31": "2Mgw5EFGT6yAxH3C2Nue5zdmZW6LcBAfZT12nDjF4QYbifhjD8LXrrKYse6UEHizH47rTr5eBrpzMFgPc6yo5AP",
  "key32": "2dry4YiR98jZnaQPTpZpAdP7CbDviUUsgyGuj3MK3eJur1A89DvoLZVpadLGwQGiYrLsYWs7R7fdEjyHKAt77RLp",
  "key33": "614xocRXFduTVCEsGgFmVgzTE2VWiyqrHrQXXhfBbnWZbjwVNQY2h4SkR3XNFVfuU3PbPKdzq8ARV8z2gVgCcU1T",
  "key34": "65HZfetPJrfiMJCZFkYSCgmf6PhSTPJMBFi21aqVKKtd7fbUnmNiBZT4FtSYH8pcMF1Vez6xtSLEv5WDnBCV5W5w",
  "key35": "vDPz3f1dodzvCgGmnt4zu6bj6PEjWNiKmndhVhWU3XQG4bHTV9Ho3mZ5UYA1wKhcrhHNWrmQt6aYEJbw1PyF7aj",
  "key36": "2acSfgj4dJ9kcUCWhMTFvpaCmSGS2XXt8oHhT4eoXESe1UFKKLJgUg2g63eUMY48URoYpTHVMpWcsrQocEziwkNR",
  "key37": "S68j4cmCWwyEe2HMTdRaULzz7caGupJQgieSd36AkpYmZZCqotpxHt25W3RmPumu3MCYeP6SVWAeCp1fg3gHPKU",
  "key38": "3ecTw6yFmepKbPBEZGjLLLog8cnFiPrbJnfYL8rMyL48iN6TE7XFTaLcZ6anqv84vkEovrroHirME8cDhyFFk7LV",
  "key39": "2CnRTDGEzVoV9138enSDfzMTKHQXhL53puKWuktTDceU2WcwAJur9yEHLzXwb2AD68C7s3YbpYdyvwMGQdkT8dXf",
  "key40": "4c3sN6GsHmp7nPeeLAKbf6eds6bvFQ5Us5Wpujh2bPebstGfEtQXA7dXvo1x9iBkr7Y63vgWMpdkBBGGXpr8sru9",
  "key41": "5tqiQyXLREbNcgV8PDpdChyFozsBDMb1vikedtYkzxALEk8WEEdH1f5Pwcf74UX4UECiijWpouHg1tTk72bNGu1i",
  "key42": "j6SvLsoFU69SLRxgZTugGKPXfWWbXu5V8eMehLwkUo4j2FRZZGf77gnwRBiSCiCfeTxAqgfBhiKAQkmtQKpf6zm",
  "key43": "3EEFU1pAABHro47a4LXa72CCTnCUyvVkvPLheZRk1xHJb98ramD8kaeKej2u5nXGxXE8nSs8oByJGTHCTLryQiX5",
  "key44": "3Jexa3j3uFWki8xseews1zzxUsK9b8w2NBd9XSBZrTiDkFsftETvJrdQowmXrpLhMFV8vuEfbhJjBKtnxhSKBFzA"
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
