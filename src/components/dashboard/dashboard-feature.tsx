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
    "4ooy3JRjUkZdk3FNC8VGLBskdag45hLRAzd8fsHt1c2MgASdEjR2qujmuhrjtLXHkPicGaJdLuHZrhQ3ryRkgMH7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JfTtv9Vhb9DdKfj2QjXuqLBbTanup2Y16Yx6hxwggQeacDKDq8c5sDiDttcGMupqCXZJiZYjvS17DsrGS5GhaaA",
  "key1": "27tK75JWwLyasuByUWiaGq1mLNUF6CjB38x8dyEq1r7zhwBE2AUAieHpgQ8STCijyQgk5wKsVcMqTrC3253R78TU",
  "key2": "3FiR8HJxbKZcrezku91ujVt6eg8j3FHdJumd2MSPJE8RwbKLNYj2g9qP3DmxaReXqvRNZm832SinX642Fs76R5Mg",
  "key3": "4rFDx7i1tAkod4y2buTh6h6U3qtB1eN73V3rLNDre5VzK2R6PGfpfbacs1FtrzGiYEh3j1YZX4yLLo2RdgXbVH38",
  "key4": "2wqq5bTGD6L2ErebdRNRZY9YrdwqAkigkwLKtXPVRpYDfcVFfU6gtH8kWDSVCpJSmeYmspisinZwVGpRMrFdfWN9",
  "key5": "4fRbAWPHfLRySTaeSTEr6ZCxBgNgqYjjPvar8v3jBLRKgNKxQig36GVLrtdLT4JX5D3rw2FWQrTukcxtpZ6aqnHp",
  "key6": "4wY34Y8QjuE3eUMeshneTtiDka4qj955s7Usk75dMUErX5CCbTPBmzdXjtQqb5pExcLrg2n5df3i5JVnfvG6C17p",
  "key7": "dY6yEvs4JB4VnWZLnmmPHH8SPcuoYWy1iZGsQH8j4wRL6YWqnPrQPhCGQzVefry9dMZcUdcuU32sQhvtEbkjrxj",
  "key8": "3riuiqTD2Cdcx6ZRaxVHf24e4HUP9YVcc3FrdPsfHGZUcYfSb92Mwt8KTprtnWbcd8efsdktnoxqKZU6acAaGQnh",
  "key9": "3i7uLKWgDq7WnxgMfPgEYv1KksXZ49mxxM5N2CZy9DsnhHngkeXucAaEasfhkKmvsvWnmcTo3ceswMNF7QCRJ9BK",
  "key10": "57ueK6Kz4YChf564CFru4BfgMhTkUqt6ggjCAgZWL5EQufvALv1gUoernN5N2wCRYYkQPQGv5kKTUjrfJmS6rA2g",
  "key11": "28szNdzWZQ9FsMyMSNa7iDU9HGSLNoiCzqQU4zdqFVQUB4gE3NhGbqxvDgnnwn52GKczDkYbHkKnrCE4XSgWKwuz",
  "key12": "4mcU2iaAWeZbCHkH6y1D3h9qtR9B1P6JocaPpDzk4cGq1KmeAG6v2Cdj44eKJkJ2t6M4tUZbaYhpjEkYVgXxWT1w",
  "key13": "2zy8Y1SsJkK31ALZuKHyy7BtDTinDZxDr8ytKJtWKj41fSK2xsuuGZGU3FwnCyx9hMGNT3qWRZQouDgnawf1cQjc",
  "key14": "2jzZNc3ucNLfTc2npcp8Hj2eKVCBVTyYfNev3xen5kvRdruqhmqti7GmhMCK5HzSJJfpZYUEngNsrDBqG9VJVt3U",
  "key15": "ZTrTdMchYmCZqPxt3tFf3oyUgYWtd9SZa5oW2KEw8qJuTFsZUx2FuCKCJGH5tSza1mxd4EaK5JuSX7dRjmRQoGj",
  "key16": "j3C74w9Zp8Nkmz1KMwoAVgY6RFnMwV3MSeL2K3ctA1B3hmz3mKG1RzxUtwLSBiFsA884fUExwkCPnAJGR9HWMW3",
  "key17": "EbaFKcNk3oTp7otRTzHFtadKVh9PjuiW4ekuLnPxbiS4btaPP6knPTowx9cnAMjyBaXadXd519xBmfQXqAjcrZp",
  "key18": "5sXC5byjsAiD7KZiQ8eLhsihCxxbsBRxaP21qRaBGgkPzYf3wdVGpvrJyN2TJy4GyCLtdg6as6mTT1iCJn4LxoUC",
  "key19": "5J89NZLbis6uaof78YkpWyxtQa6bHVRR5LC1dtea4iixte6iGGXqC5Lck7QMEPTgHq77m38kHhcffnPeuhgBrywX",
  "key20": "5G9SSUBjmGukuHJbgdNhB3HeDijtXW32doQaCVtuhHmvx1DuHmTnj5BGiQh9C92e1k7QifgW3nW46hFWj2NdzKFo",
  "key21": "45fhHFQx7h94q9CTka9EVbPwz6V3pjJA5oZj9QMKwpcHhtQqSS4v1QMKGDcRP3xnB54oCxbsqtM9gV4f3igL3rqX",
  "key22": "7KAqWc4b2GY3FqGqSHmnSogvmjS9L7EfCU8youAWXyegWsm1K2KmSguipoJ4nnfB9XCTyyPu8VrncR8ZxsytsKw",
  "key23": "3sbNhZfrCfBbi6R8AP2BtHUEhGcvaCEuGk15C5yzn6cBPpXJsAPZmcaxo1vX2RVmoUPcJ1i45WVzcPf28DBUdJDG",
  "key24": "2S56nx64MzqxpdZvSwgjmX5pQSN4z9YB36mtC4D6YjLVdxLiZkuxXvkSjPox3LqxCg7313gX4MLtF6bYVJ5t4xnK",
  "key25": "4fLGY99CjM5cbrddfmhDmqiP3j2CCviPyVZnfRR58hzFCLS5mm8MtUvY2e1iJCsv2zPqaxNXtk97HAvDVmjEVZaX",
  "key26": "EarWPUi6nAa4pRsimSbVWeFqqHyJkdgRCq12HFX5U4bqXCVxeSj1BhYWJsR5Qv3LbA4uo4iLfiktYSqFzN7r3jB",
  "key27": "2vVi9F98DYYrcP6KKjnNL2cNMoz6aJG1eDm94zQJBE5Kg3VdEYHB98FEeXfN17u8Rfv5jF3LzajNjVinukNzwebv",
  "key28": "5H3zWX38b3K7zrDX9DLXtgFDH45woSXgZjNmvjRd55PXEWMTfPgXguaXBugZFg8ydnwgeUr3oV4PBJ1KFWm65zrP",
  "key29": "3Rj2iYCY6opTHBvC3uiYWRq7BiQdB8MsNTnfwLq4ev13r7TpXkSfTNjaQQLPSNvRn4pEwdh3MCTsc7kWLZXrVby5",
  "key30": "2bZ5R67Ye3KxxNWPGw5mvFawmXehcg5DW9ckKnkUHRB3Wh4gHxLQLxmek4AEdnctBr8rjMvSBwSTNgj6R82T8aw5",
  "key31": "4pMExitrG2ZNVEdc2PPDk2nF2STuxgQn7MqJ427FiZWTQDo1og9Bo4qLp3umACUQPS5iPofCWuAY7NYsspeu2obZ",
  "key32": "3fKt2R31JBxQKYy4vci5j6UWGp6FcxMmdKnz8rymyEu9Hyq2X538nphaqQbMcBYzpq6MveRGp6yaUje769LqZmR2",
  "key33": "31K6oLfsoo2nmfQH2HyF6K11cYADErsh6r5fj4yuNWvHDxpBHdJFHQom8zfZV5oJchi2ZT24i95KoRioqqkB9Gi4",
  "key34": "2BekrbpKikmM2t7KrGKuGhyeSdroqqovNhNqMcsNnMoAtug7QuzP7J9qhKe5Zb9UGkh4KTfx7mK113EJZKkaEVQd",
  "key35": "2KeUYNTfZnWDR1CD4EZbzJLfT2TsoCm1MB2rx2jMZsnnSCe3G8yxpjGdqdFGwyD4zUpLsenZVjxVxm75CVeW1iWr",
  "key36": "5zTptpRhiwrfUdxeY65wtMUeHGxUQucLEXHcHN5VnDzKysCfrCZBnzfs7VXRsx6EzLAqo9sksJnrnCncUHGxbnbJ",
  "key37": "4MVLXeTRExt8REANXFFXhDzQo8u7mnSRNZi7pVhKtrGE5DZHzKcEjE8BAAvp53hhfqVB5r2TbWHdqKq2wsJ1rpdV",
  "key38": "2sgaLaSYnYHxtyAmE9Yr4cPFNjJTf9G7zS4enKhnb1Va76PWARwuqBsg38122C662a861BVr5nEsGDLU5FAXbdsY",
  "key39": "2YH7LzFoo37qE5xGd4xo6owgU8wgw6Q3zboTikQTmXNsJECn6mENiqkdLpxgHhT7KSYrnZFSxqnTSmCHW287wDuj",
  "key40": "5HK71iFq74nEjF1o1WrA8uvySffFhq6sqsfd6opP3SLfyqzmXVYbjR8CJ33SmVpog4mXdALBZwJQLa7a1bpT1SuV",
  "key41": "2JCeax9aAqk3JkUnrH9XuCuzXAZinzZUtcSgWvrtYdg2DLYnikoqnzp1vUHDcYzYhXEx17snE93McV8sCuJH6h6f",
  "key42": "66Rs4MWEqMY3Pi5frvWDoPeW5hFK7dJixwjnpz98pDWwiyuaaC4jCoLUCUiabFCtWubQcWVX9wMqm96HsS8nUcL8",
  "key43": "4QDChgvoRmbpUbLN7eRamGDDEjsTwFe2jKP1LCumcHAbyJtJEmGDGezUCZEczdUv1fWLJzSqE3CmLjbVsGvmZ7Le",
  "key44": "4vmfDTttcPTbpz2H37YLzmYvF4TU3E7BDbzcJACnRcpcVbSLAR8Nq5k25uPA7hnvSUadtNBPgrSo3GtPKpDrummh",
  "key45": "irRjDXPkkzhcszS3Qwp7saeZVhayLHooVN4hHkA5v49AGah3ijDJqTUS8tAwjWPH7ffEfVk716Sc9WiNbeXCBF1"
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
