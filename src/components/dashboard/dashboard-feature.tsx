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
    "3pYxMcjgrJ1VtK6v3WBLNJLvoBrhLT5a34uLdfW4WEaTH5Ljhaac9sBHGEywiKmFJmFZu4qz3bdgn8hzEfPf1J4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21Td9tmK6vHmHGj9GasY3F4ivLEsZFik5rhg1SGXxx8CHk1tHhoKvBoRBWMchNZK9EJnGHS7yLkTtFGAJ1SsL5qt",
  "key1": "HMU2z9AeT74GmHeMWEG4hDLDoaKY995NeHR2MZSLeq8WL1nohu7hP6X7HswnYrtNvmsffaxMHqMCHFRL3wbi2e8",
  "key2": "66QNUdu3ELqyTTH4BACkYZVVaa2VCys5yKBBLbSZ5PyogvHfmjrYzqcCRrTiHaWmYaBNT4zTqHSndtkSvoArx4oc",
  "key3": "3UUT4Sv15ttQEUtNFKQT3Fyb2Svj8QqoRUxdsXWDvcEwpuBq3XYQ6rp2BvzB4cMRadqoFGsKhg9qaXE5TZZebq64",
  "key4": "36411c4EJE86zkfw3CpHgxbgQFtbPjMR7sataUCdnEM6iqgYFViEzwPj1NEVCTjNEeQd1ywA1QiurWajbMLWy7hf",
  "key5": "3sGJrZs9Ma7k3JqVt17VgJ4zeY2pWQRSf2yv9RmYp8Z8QBjvGuoPNSMMdFJL6rfDhpK1hU8dxfrA73oumKuZWppK",
  "key6": "3zEkAj9gtZx24pjxYofdeDdAXUusD7Hh2csbjMiZaKQApgkjSpuMq3NoZHvGgcLd9z5TUAGUvdoovKgPgxz12hp7",
  "key7": "9rN4CQCxc1H4zoRemkmCSgZhfpcyv123Rx14Ff6LAiVN45XBc3QiS6Wd3zVciAL7R5fqGKFNiCnEjDiTniTQZnu",
  "key8": "2AxcV3NzbkQdii4EwqB7Bj4FDqsFEF7PPMES7ekiFRVUm4sycrjLrZr71tXVkwcrbmftRn12ggw4TcD8euPTCVLj",
  "key9": "61FH5FMCsAwcxS9zMWmx11rcLx2YXY2Vg8nuKSHz94TpxSXbLYknuw4Ymfh9NVuRAio2UaEBCHsRMud8dtjWkfFZ",
  "key10": "2b7XrA5bWn87vkfWzN3t3ogJLHMi3qpHFE1uLr1EHmDsv7REBcGD71E1uQTiyT3o15TY1AhJ7KBqgjkxKfSREwE8",
  "key11": "fxUATQebMdCT3rMrRS9TyjroaAKjhmfcJFhkZkCsSSPhAboRQJU2sfFz8PV1GVvUNveB2LyotX8Dq7ELDibDPcQ",
  "key12": "5LNAgbTjJ6rTAaoHmhAnqCWDUiCNpQgjTZ9rcJt1SWhUk2Y9fJxzLzkoaVxvdnVqD1vFGrKJJbLi49D8ojkGgR4Q",
  "key13": "2sz26DkMpUFRyoM6hc9dV5RymWT8nhbxFVuZbdYuenHCfSMVdzd1hNSKUPJq3XSBtURDTPyMU7pmRqZ4vaxS4nyp",
  "key14": "635TMa9xZNybb1hLhFNPN1nsgj5Kr1fFe7o7oKFscTppuuYGpeGhhF7MVQ9mEJdqvVrJ3A8UizQmvNXw3GbCeGKe",
  "key15": "3qCySgCzW4kSyUBEK144pdYVLTHhFn52SNvSjeQHLJLZ5QCgz943hgUWoAfcdV1NdhwaH1u34Me39PYypEVXdazj",
  "key16": "2BzQ51aC14QwqFmsgtNQpudQy1h4n6aKREMDLBxPwsiPHC3yz6MkhNo8DXvdJ21H59dgG6ZD5PVcivCLwLLDPYUF",
  "key17": "29qM4UnsCaXiP7vxFBMErjaDyEFmUHnpcwGDBk1XkpFDnj31fDCdFonQYzD8GWNkQ2QCAuKMUngnbRDC28JzWJvY",
  "key18": "4sWioaNDekmimivHqXm3PBP2uwX4b5thQvPKxxTmsKsFsFfLe97KncmSRfEVaXi5HuhFu31nkN8ojNGZdVnXR891",
  "key19": "2pohnv637c6EcpLKE9NQPurFQmkV4cKwK8FbRmPBPmvw39maCusWxTGxagaLbw69DbKhfZCSki4TqkAVsPQNUzEo",
  "key20": "5d5aPRrbZQNjUf7TsfC2aWbQsQSE4QJezzHPXLZrmzxShHWVv1CXMpdaEBwt34PqGCtAQYXwfCURBxiFcrYThBKg",
  "key21": "29sTjSocoWtP3cmN9y1XpVaNfADXnfRsFTrJtZ8MjyyPmbduYfvwV1qv8mabcLy5NjoEgmssEHg1y3G2rgjvwB49",
  "key22": "2LDE8DiKBuLLPNRTVYvxgxjnjZsabx3KomxNL6K2CFCUXj7o5cabVdP9XrHp8mR2iXhRH2wHC6Sqh5pza8L5Q2zT",
  "key23": "3MnuuJQTUGrtsbbHT9SuHTGZxVaRb6MaWVKAehfANTPwYyoHk3jmHBVsgUf5EUxmDUAvz38sNkbh3xtag9c8YJ2A",
  "key24": "52zu2eALny5t1ZV1nn9afnZGRDVRpbB6R1YyPpZH9KUyGPhbJR17ZWJh7E6KuhVnpf6rNNpSZv33hr9vowd1vpix",
  "key25": "4wy74b8sfFV53F19SG1etEHh3n3aCcM6aiwmywcmmYxtDJeEAEBQU7QJaLcwJa8jecVuM7QVx8e9TDRaCwExzDyb",
  "key26": "4mqWN7Ptc9zCJrJhS62UR8hQt8yLGWJohJD5NbpwaZYWyogk6aX8FXS71H2PgGSjdS4W5X8cbAFVRKtrJHCdW3Cu",
  "key27": "57RkeQG4sByszvB5cWXfdQ1DJq2MYfyoRYGnyNjJHqvKrzToCVCNKGiaCKZouKPbuaNP9Nz6zYTXkJNQm42afUBr",
  "key28": "4BjihMkXbdymS9MwrudsjEk4cB2B6KXhUEJ8mxRS7YD4reEuirujEM4chrM9i13RgCN86Yy2ChS2oHypE4kWxLZR",
  "key29": "23ocp9eLSbUDAm4K3ktR25NbARDeJbcet5LxWmvJ6i923U8efXfY9hyd8YoEQJvBs4rKS967esU9JGBV4B2At4Kq",
  "key30": "3xuR2Rj4FqWtEHNtFFuYtvs6a3PtdKBPGcLyqMDHLr1HbaETpGymipfNWcGxxym4eW2WgtHP8wUDY95PngdZHSPt",
  "key31": "5yU96HypUWJpEdx7fst7yLHTjemYCVGcUmo7nBcYF9VBh65bgJDLuFT11tED4GXkQtgqvoNf2UXQr5LWPMv8TKpr",
  "key32": "k9wwnZaepDe6MdnGFrGS9RfRBRgXhvJYh94L8TA1gNkbHEYaV9ddoi9szFfWeMGFaQvD2Lkck2hZWvCoJFMNNPp",
  "key33": "4PuFULYfkxDeJLctSjWPwYCYadRmZCBZ25YgBSSFP8PDtL9kf6WzPzrt6T4ZMU91tyWnmHEeHeovtkowwFN57QQh",
  "key34": "4f79Mbzqpa8AMeBjm4TaUJFMdM3fZ81GNUBeNaZMPQwChu7BFRS5treV9UrksusnggWz2rKizjJ81DiPivWkEVwb",
  "key35": "4p2SMCmYuYCLYdLSpcLjqT1sRYjpfyhkg4KcEGwtWB6eH68gmBkXtfaSQ6EVS3FabhVMqkjMaNTbditZbrmoHpVq",
  "key36": "5JeJwaSHU4pz5b7s2bX5y5ck1vP5fTaBme4EQxxLFeVdBLfBzZzKyZWGpR8c4bUD5thVTeAFGf4GQNa4NzMe9pDB",
  "key37": "2WhjaAMACtHAu4E9MRBndBzENzD681g4zfbdg71vtjhuSF4JZyst4izwjTu4hpmBbsRiYHea1266T3mTbLt9MD1U",
  "key38": "3KPSn2AonK58Tovwa4F7DyCA8M7ukF1h26QbkVbxcAkkgouyAj81fbV3xHMBNm5PfM55W8kNR5AvTYMjn8x1LWa1",
  "key39": "3Fou7MG6S1bioRCUwTiLQRMN2BcWhi9uxvjgaTT26bYFroQt1CMxsdB55qxTzTfQ6iJB3dmmKs6UkSLFJB6zpXEk",
  "key40": "4bpnGPBiiG9UQu2PQFTruN5WqA2EpABoNvz5RDJaM4RQfhhUkPhTEcK5yTBH53WBj7fVCFmaE2VuN2Ji73D5EgPj",
  "key41": "2oMMDtHCXeF5AFHqPoggaMKze8vsfDtDdc5DzAZhignYLZJ9CUcrqQLk4Rk1vsSbJRes9y4fDdWSBgfFA14JrmtT",
  "key42": "4d2Hz8ctqMJ7inVw1un8YM2Yc2GuuMBhiiWQZzpGxEBvnQgzvTRKZRBg5nPDvukRxYUrmUNMfD7Cn6R1Ls7URpnV",
  "key43": "QSUGrKSPQnG3XHBhjVW3yuwnpw8djcrN2eMwKAjeReEfcSbNMCaQgkdKcvXoZT6HCaXPMWfUApnZov5cyn3sK47",
  "key44": "ukW8Kgq5wQwpnCQJXPbY2FhxrChFWekQx3KNfCzNbXZVysewUkYgYp9opnuKZVWfVaqSKxoAAJ3uMk1uZJLeSz3"
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
