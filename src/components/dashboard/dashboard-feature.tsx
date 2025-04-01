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
    "bJ2m5erbHvxfwVHGnbvqHCHFaR3N4sFAaRFrNJRpaRoHDWwjYLaCc3RYKK5DoBF2jiv6ZXGyoijer72HVeAZavb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GBAQcT8y4gbX2SdYNacZ6aMESyet5Dh1SY4rWCq6kqeR2JBXegMhcBzdv2hZiDAXAT3X6mgNnXTXe3SYPFuzCMK",
  "key1": "64zBZcXQDZCNpFY9ABzSbMYZSuYqGdQ7hZWRrkPd2SxefDAECUkBGwbCZtLCZ8WSyiqj1zUVR4itDwsvsYd5VAw4",
  "key2": "nD3L5FLUMHzmEDd5uW9w2pDVwehNtHoCLGZr7jRCXt2SmiaekV3Ay4ZugvdcUPxpzJEnJwatAenfvpxFMvP21uw",
  "key3": "29KQ54bHegQtBi13FcLLApJPJgchrnWaPtm1uUj27s8FprWEybcuJUeGWoU7uPDeNhbDYhSwoB6cYesAC4aW6qcL",
  "key4": "4SKxuUSyYbUj2ratKQgYKDkYGz7mnhYRvuKwNDcD3jKN5ytogYNvrMMptwDfTVZ3FFxg9Si8851cyeT9LvgZT8gf",
  "key5": "61ZRUpRgkEBAByWPmxvPTBedT78CYpyjTqoXmJ88zKvz4jXqaCfQNabhgthX7hb9jm2iMW41fBV6W3NG8gSspUX2",
  "key6": "5hit3CXJHDXsaxaoW252eVMjTV2C32Zv7mYngZp5AeUqYpUL2EP7H5EsyiR4Zv28HWaC8iA6jbH8ocTCahaDaXVH",
  "key7": "r6d7i1WAsrj1A6Nv9TNt7yiyzEBvdBxTLWaBu2QYGcFdn7URcFHgC5BbwhxxvbYR6NytQhiNHtQToKJKLGPoT6o",
  "key8": "WSbMRCmCQAd5FXVgdoHrpH9PwR7Sb62hErExCXRjR484zdHoqgTzQRL7uDHas2TbTks8JJkMg4NJ3TPLUZFsZoJ",
  "key9": "ux5Ed124J48i7fjBcpHc26Cz947iwKozK5aHS8kDT5XnQEUDHouJXgY2NYi1thayMfneP8XiPiZAfj6om17usUL",
  "key10": "3BNzt5hLb9NdXCVycDcEQ6wUX9jrScN8CNvFQnBY1EuUBK2hsJdf15QEnsNSbxZTBPt3SkPUy9bz41oaUGhXmdHp",
  "key11": "2jXswAyaxB8aKWNMiQgeaZze6yNcHud4dyLPrvaEi66fNpYfZec8N9BiTmmRCmD1ioyTGpU2FtV96DTZHAkMjtTK",
  "key12": "36GLXmJd6kDTj8aPoF3LHWeqZ8Svuwee8eGYxyitbELnWW3whetUGTJwzwrB4PN24ZZFU2tw24dscsRYvuTa44Ce",
  "key13": "5iy6EvRXdxBMyR7KqtMvDdkK3DcH3TJiqekjUxz9JY5VR4DGbuft49hSZgXeHvUekmtzoQxb1oD9mQEJybPZzGAr",
  "key14": "5GQQCyeCrkEDcffgxmH8QK2jjWDH4Rq97dwCYkjH5Kn1jkRvNvLpWuVEsdwCUDPCZidPgfivKA9LzVAafwXNWF8c",
  "key15": "5uBbAa6qaC51sTMUKWGLShot6N4wPsKgN4ttvxbSB1vtj6nRn6kHYqVguLZgjqbneGRWCcuvR1wjSoDJGdKxFuXR",
  "key16": "5AyPYrWGubTCWpmGLb4GhqgeHW6SBsKpq3G1NkZVBcYhXLTkE2vBspGJFVJG6DqE8FBoqTUxTV7BUfDDx1uWScUy",
  "key17": "y7ZCP8p1X3LmEzU9Q5y6d1iHsaZmWkBmTW3KiBtEVBJ3EfkX9iUzQLyvvuLut5qmJai6CkD4TXLq7vVHrQkVWWZ",
  "key18": "2Ba8A553wETyhgs9TMBhYaYZje6EVHX5KD2HDL9CtabJN9wwaA9f4RSBB8utwzHYW4TyoFDoTBN32X7Cd2DViuy9",
  "key19": "4XmrMGERTcUtqkTGV7bDVhbYNicRdqGndr4Wgv3rZ9pyhuL8cUPVYVkFCEyKcbQaJJRUJjezLBh3R6q7ZAo3dL9c",
  "key20": "4tVsfHAyXzhmQotiHBVb2NJ5P9VWseeGSUyxhy4yoav6iRuL9Qs5g5bN2CqpdoF7HQse7Xtg9MPZBk7VYwXnEJPw",
  "key21": "27mg4zhsCDkkg46hzZJBmjAgZusWtfryezKzYH9PjQmEVN8Sbs611c2uDdYrkrGeK2dqipdCYTfxMUjJ2nJo4S4E",
  "key22": "W66kALC59nNMLuMhMMig4UB5PcQbjaUuCzGXWWsWVmCPiNnQJzufdR5fNB8pVn4XkKcV2UJNRR3bZ1J274FRjij",
  "key23": "47gnLAQkQYJuwhwFonYLxtpG5vivqFisu2nS58yLxc5tpnWZmrKxUbLE3HKFNCKfV6CcGUm3pbjsVRChLSH5FWn3",
  "key24": "4BvD9mWaZwXJ7VvfB1JadZynLZncGFBXDvhvCnYrDWx2XTu22RY277v3i616jNE7DVs2nf8rydFTG4jRREiF7T1m",
  "key25": "yn31mS15qC1oVhupS619Y1hcL2NBbtCxsXr3hTigb24hSThNKhM5Fmwr1K1YCFCBn9QthBUA8Boq28Gs3bGcDEu",
  "key26": "33gXmMXiZzRaym2c9JxqziYcLcVKMwBHWSgMg21LuJosYa6B5UDejBMvNmxjh6nxX9cmF16UKuqkcfjVnQxg2jLj",
  "key27": "DPe6vS7Hx24WRGTgJvxzgEZK4RDbyg4srmrsd4wFyt2mKNtZ4sxNoSnKZy98WYjPCnU5ZTnt5KdLjNmZNNt76Cr",
  "key28": "XkCyJhzjjwQwdN1AWkYMUiELJ98P9NNhoX4dKpUs17CxCMHsRi2Fxq9yKYbAvdYmSsmtPGZZkLydQve6rKJ7A1E",
  "key29": "GJKQM4YmSQRCRJ8fzxfTYQocYSkVQ3VGnpeCJVmG1XUaRJMFLjxtcL1489Gm3nensxTTvMjQ4imC4eftdK9gfbW",
  "key30": "2Q7ECtLX7hCswGH69qrWrHcXEPUNSgrwZn6YWZaWLnSp6r79yPMyoaigURf6jvByqHUgS6aedkDBBx5qHnorgYqN",
  "key31": "jGCT3YE7pCigYBGmFkeU9rHAFGrhuPPQj7EhkjWegReXNeJfFGry4gwsfpLYFK98CXC4LkHeamntyM1MiFrcBju",
  "key32": "5AHrp9iTtgiQQJkXAbADb4SE4jN6uKxFc1w3d4utUNP5nXYLdD7tjZoZj2cUxvcC6zrzUB6HMs5NEaxFsFNi3aLs",
  "key33": "2zDnvKuML45GeXWkkutAV3zQ3rE9emg95QTN5v1NhSspYxVJbewGAcLJLDXnP9AJpZDoeyZvawTRcEnjDtWm5XWp",
  "key34": "5DE93pLQ2StXNPCx7i2yvVX9D6vATRr7XkDxy1RfmBVXcBZgb7455MCTaBwUZ9qfysqFEL4gDYpGgR7AEzLmuVet",
  "key35": "4xbnhtNwVHzsVs9taUyJ1wTCSabGEw4LFesfPU2Rz154zbeKbPoeSjv1dpaX6E8pkARqzHsTZTG7iFrnLqSg7Mco",
  "key36": "CXg3iUFh7D3FwN7jGv1AeoBuhjThgZtvWphzUU7hzeQ9EGCzfYCTDHu2hk1GmZkJzpUaqZmBeYUFkxFzRUPvF3V",
  "key37": "qYW3m695wCDkrE996W9KM57g9tEq3JCdPNZGroSnqmgssqEbwwKcfLEM7mPCrfY9quk36hN23mBfJkAg3zur7P9",
  "key38": "eL8YwG5xJPxMJM4qgrPgPmTEtCk1rGMxXnha62krfk9PH5onawfGd3TN5yp29z44iCDgZgRVTdynz1soNcHgGNE",
  "key39": "4Czf64JWcTcneoASy3rTzxsr9Me3T7SXnarVCdnMFvxSwuuH8Y2No2RAK4guTnZDmFWdMkhgxx1d5ASFsxRBv6T7",
  "key40": "3LWCcmCnKzpkqydoxpbEjwBHXuMFR99LMigz5NDPFDs8zFqj3nhJhE2H2VoctJcngaphYaA3n74uecqmp8ojSm1G",
  "key41": "U6nesA9iXEjJfFY5QHN9G5UjfSRfjRQxsiuKv8rvbCoyKCba3RYBxdFLwevwUo8QPM5AryuiLEv37Xg8afwuSxH",
  "key42": "31h1JhCa5vJqKR6hzeoHUqdBdSqkgH3C2Gox84YwX7AEHmgQatZ9ZK9QqXrXvA6Y3tnn1WSPkAcRqGz7naXVxoxe",
  "key43": "21UMHo7kwDnNQ74SeWTjaAPX2fnSryeqUEk3dQsbHortPhX4AHQJxRCWrCUYFCASyVGApQTXcJtSxCp9ti2QUv8T",
  "key44": "2Z3A3j7NAyPdZvozzups35iTixt4WyhbDkZ92kyzexx4UUATz3ft7CeK7XMbF4mPCSUebq3qRpWfgkasqRGyLKwr",
  "key45": "4FQcpFdooYYXzmyJyqz757QWNMiD3g5kihu3PafpEhkf5h3U8mZrp6cSp29y9obhg5Q3xA7YWcWBbAFLDNeQowWm"
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
