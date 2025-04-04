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
    "3Py64Fg62qyLz4Vd7KXCVgCPp165XsANqEichnPEidw5F2SPwpjhXZVB3bruGVvbdRuSGbjxKVYqeeGhUAypj8G7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fu9ErGQxrrFeB9F2FA929yYxm5joViC574j2CAubgwLwAVt9Beraii9LM2tyCwgpVRsjRB23EC4UfczRFGuGHjV",
  "key1": "NYSdZcg5E7eJNQjMDFaN74YhQM6NRXHdyE8yGQFf6T9Rqz2eLYwrEhXo5FtRZLwiP92ZfChbyht8rnai8CrTENY",
  "key2": "41oyzjgocEmPBJqU5w8feNaSB3aaVdexYC1YhSzf6CfePy8P6cd1Euw5TzsxFT3efffjdhpszgSVthwVoCQXrK6f",
  "key3": "4anD63D2d5KJn324Cg4Qdak4w3sXrYifo9BDbBsg25vDnEbd8M28FVjpjZhZ69Aw7V4Vryuhyv1EQrta914mJxoA",
  "key4": "52pKQpqJGRv3ZQhp2AEaAzjSFq3cc3sqmRTLStUuswKGQXTyRy61uJ9AYvzvW6NaM8nZ8k9XW4oNLzVLWXx6KbND",
  "key5": "g1kHPQYtyDZXDqMkx6bteFnP9qrx1fYKva7cxFaycQFebyp7auLaUkdfquNz6H8vzviBHTJHYjUdZKmc5u5sFmx",
  "key6": "47y5RVjy8w7cLNqjQJDbRdzu2aUHKJhM6EnyoKPdRVHNHkZmDRHCZmWgeWKbaEm3X5eLbXn2eFk3Ezwk8GWopFeW",
  "key7": "2fW6ETjaXbzfcLqqEzjb1tiGSDTaRwoVSmpTkW4wxz7PJrUAWXFUdELrUbEhgDsDYFJZ3qwMMRTyJNWMAAyKo8W9",
  "key8": "3Q516yPKWvaTuGEiFvnznPm18wTQWwr4eqtps8Qf4NrJ1WzsWXoW6ffp3eGsBCGFEtgsxLFwjQm61no8D5ccFgVe",
  "key9": "zPQehowiPzMs8Um782tkqzsckfZGWdW1pNgE9JyuQuKTt5td6Rzuw2e5GnnS8dAzESRm5nuAzwxXHzUDpR2ei5k",
  "key10": "2nxBRvyLehfN3bjw5ePTjeGX24ySo4UETnaXSYfXMWLReFKQuqu7LVHXQA9z5vKKVBdrXSV7TDniqUMgy9vzxQp7",
  "key11": "433MJLiQ9NtYrhsQNAN1BJXaFRCukat1Li82nzfB35Huo8JuJ8mktZtxc3qsKB2GFopMkXSPBWZxE7ENyVJefJcN",
  "key12": "YPjttWDimADyEsKzMRkERVKBqeGeuMi9tpfmPwpQncgJtueDKdsUbB6KWsZJGWY8kmfgF21YM29KTbTPRCJZ3BL",
  "key13": "4zYWyoeAdpE9fkt4Y45GZX4ojo3aETnqXGjW9L8zh7kuF6xJoqNFGFDuM1Nm22pehvHB4QFx3oW3tqNMaV6Wn58p",
  "key14": "5cCfYM3jb1K1QDeYeGLWY3k46V5jffVtmRCCX2ueDrH3nqsad8so4QmKUfdDATRBAf5pJ8BuJVounT1zx4G8ba5v",
  "key15": "3s9Prw1UKk7dhiRQud7As9pA9zH2ea3QVi17WEDDpaXQrkBd93q2PXvsdsD4o44g7BYwrKCCERsvDpHUtgA6LxhN",
  "key16": "2rzXbesoVqFqcZdQJUD9q4GEgfQeemt85Jq9eMRrMb5Yc9qijS1Asv4LWWbkHkvfYPCorWk5so9uLPNb6FJrcL4h",
  "key17": "3DmQm9G3pUFNoSMNZ3AqoDr1UhzV45A7f2yUjNta2FLDMCLN1SUv56PovSmHTtTUAuPX1Mpnub2nCH2fyDAE7zrg",
  "key18": "4pnDXX4dfBtZ75Y3d9TkU48Y3r4oJnZtLyHo8drhxTA12deU9K9hSugsoB6fDeQ6mrUVGNY1DsFw2bgohn2Pxg5x",
  "key19": "3PEDiHXSiLCnywHHQYbfRWZqo5puWHG3uEWVJprVEFe7WQhaz4rytxAVsCWA1VxHt3wbGkAvwJmG9Wr842pfR9eV",
  "key20": "4Fp7RMYLV8jd5ZAS1kRKJMaMDxWYwcfsy2Ri3M9XDxxBhvR8bzX4Y6cYDPwnUXNWZg6xDc7URWr1Gi6kumZe7ysM",
  "key21": "4KabojGKWQGzaCzioULaQeryEGyAdUAMxLTUC7HMMyH33xvbwm5cu47ijsdzBaV3rtNVMSvW2ZEHUg2jKr8zbykF",
  "key22": "2FmDzJkV35PcQzxZdjchY6QUp15sBx2Lc3KnRZRN6mSYWfE9F9gGxzC3wAjADVDZyp1vtb4kiQCTgQNS6Ppj4apX",
  "key23": "4rr7tyYRY7bUCVAKiLYG9dacZHTKa9yBQBrGPptoJh6TF2UQtfy9upXL3BHW2fywGAjzqtGjvRJUvrVNveUN3puK",
  "key24": "4TRBx1mM2z6EY6jC5HxqzBzU8yLRgK3Hz25FbnQKNPjpQ9yQ87JYCroDWYqthWyGHt4X7tB6yjjT6GR7vBbjv3Xj",
  "key25": "2Xx7AJRZuU9mPuseNTQFrAdYhwsVmkfYBe7qa4XFEAkqezh2xLEbfPcx1Gr5iCne3rZ8yEahWrrNBKy4JstHkXpZ",
  "key26": "BTQDJv53uNdzrA3r51xgaMVEjNRwnec1ueXDQ9z2a57yZeyT9xDzKhuSTY12M92EEq5CD9kKdty4DTodMveEyht",
  "key27": "3JXCbvDCZ2UD52fV4YrVPV72e2FUzKdrm6QpKCEa5eJtHxKRmBYWgnZLz3onQJo7aS1xYGzswzcJhJVTRMoAdmoo",
  "key28": "ngEwoABARBTCbXCPzZ7Vt8mgQZ6uou7GEhBNJEw4P9Licbc3m1cx2knBKHZEvsW91REScBGE3jYtGECPdE5NA6G",
  "key29": "VMkbXf83GwQo1jxVNepYDoChSL6mtu8w3UVe5cG6SNX8DXX36wj1ZyBatNnJXGLtTj3Fs7T5CooFJYWwToGMCwe",
  "key30": "3SjLiBAiem71vMuiTaWboq7s9rk3BHiMFrxz8MZpfMgKkuzVtVkqbTZMH5DCANH48TBLLEQCsoF3YS7S4rVfhTy",
  "key31": "5iVZoGyuTLEZpS6Jo9QjFTE5W4rzqecsk9b7zR1pshWcKWNtQrf4oB6rgP9wWt9VZZhvS3uXNwQwM887PvmiygQL",
  "key32": "5HTd7fQfuQVhFYyWzJikaMpEMuHdUpXt3y5RY9TuTwRj88Tt35b8AfDLoEYSfeZBYqDRaPP6r93y3ewbergFKXRf",
  "key33": "3QaAa6KEtaxHsy7yMcMii1NxQeBVoeFkXVq9R1LYH9n9DiS7ywAWLJMamPXBo35G8iaUQptpdj5E7sqnyLxctSPZ",
  "key34": "41gT7wWdUVvFu7nSiBwpXoNoUNyTGrQciwSSPkmKSuf5qpqkJERMGtSKNP8eKdwryspsBPkQvQmgzEqjVJ42qmRi",
  "key35": "2EQSnA6yhmgKwT6sZ8JkUqJj7h3tPb9iJvHSEpzVZsmaamWaEKJjdfh3p5MGpv9A5TrJQEpgNgkAHhLDK4LTezUU",
  "key36": "y8B8HWyXtzPYAG5Hoq9kTRH8wYLsoYjgSPMqahhuG43k2A9rMRF6gPb7zZemGiD1fDVAT2iyrKBAUWtcHLz8bLM",
  "key37": "2FvPRNBMoYPJVhbfhs19684b1f2Uy6xWg6d82xxgNzg1SfVq8STPTpgEhHsMbunHtQz5uh92FUQwJLXjbHPAZGtj",
  "key38": "3t8LaV2cECpohgJAw7nPCP3TCQwvqyt5YhQtEH9HcJmzGzKYexFymffhJqJQh3KyJNiNKqXVD5Nwk7gtL6b4tRNk",
  "key39": "4HuMAq6a1byK8CB9oj1FziWrPJxMUVKTm7KMpgcHrqtHLG733sdhTkzwiWVc8au5vphiFp4QbdnRNX11DXi9eXiq",
  "key40": "5nBbXAaHPSpCb25px4migESzDmZw8NoEhUU7sBThgYqZaaAGzXzMKbFQ1ZLM3yxejaHTCvJMGHNtyHNf9eQ7vt9x",
  "key41": "63ZEAt88f1WLrGfNGiWPSUxBoZyUQxq2vRYsGCqkUvHpfWy3bTTLM8soR3Mrhyx13UaAurQzdhmBvCgcKB9gQwpt",
  "key42": "4fzZCJ71rsMrgAqm3E9YiXLP36wABNrs9MBTwXhV2nPJLXtZdtnWAFsR7qVtfThtwi92yfL997CPxMWNc7GbgUFb",
  "key43": "3pX9z2LKYKTQAdFa2yAcH65jmNyx3z9PRmo3ziX8Q4nchewSdrmv57kfMkxQSm79S8rPDsxxR1RzskwLqFPgnnHh",
  "key44": "49hovmCJFAj8X3oHtf4QPkP6D3Hmev4WpzCvNTKS1MgBn9FwkEn1pHkRA7s8ngF67xZDW8fkXD3dA5Jp1fvxNAWA",
  "key45": "2FiMFWEhynNfzQqYm3BUymCc6WyDWLqPbUTzvuLKJomdeFezGkh2C3sdjnZJLoARq3JaUSezMAmmye8MnyngyGvL",
  "key46": "5vQGx4mw7B5jkr2Wx3a6UuqJhYWJ8X23KQ3Ctmd9fFLF1EXYWsN9jHMJ5pzU7WqC3G7qYDu1bLRrKUMHBVCfMENc",
  "key47": "5z53wu3eY3vKosoTs2TyghDGxqUG5eaEkcZezBjiGoLTpT4k1XWSbDXvwnMiTtbWMv9g7LNY6zJgryuemEuBdsZB",
  "key48": "46tEP1htTpPqV5rF8EVKEX36q1gtCLEHFLkX89Sh7DqArwyJ11YmJAd8KawnSQBcCoZraDx8rJKH7e6ekTNcSURX",
  "key49": "4FKeiMhLjRvWuxLBVqPsQc25WEUydku12X4k5cnQTkj2uxA33rvMmvxVh6Lyh5cq6Eq46GF4BtjiJJEjmaeCX7Md"
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
