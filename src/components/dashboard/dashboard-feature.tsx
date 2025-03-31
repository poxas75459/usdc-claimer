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
    "3oadiHGfXQdRjRLEJ52DST1d5XhnjWsJWv6yFyZLXgjQuAx4LRimJURnKzGfmL9yzLFr7BZSgwS1y28GaqcbtWgG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CAtLR24jDfqPkm3aejFjnUEuJ7h7A8ergzvYbnDWrX5ZAm22cGrKLMW9q3rPGeRuTUpF4SqYeDHEV4JX5dWSxSv",
  "key1": "4PRbuAx7eRJyhxnXCDuX93qP3HHQQewwKkVHWmRf6t4rx5fkTjSkW3WAeGFcvCEPWAskupBk9BzvSedhWLew3C7p",
  "key2": "4RMYasRRd6fFJQG2JWSd5xQMCfTeVCRq5sB4Xqtz4WVy4iNhYe1C89C6Hh2Cm2kVNiwvudreDvmBGAAfsfcRq5ZB",
  "key3": "4ExBVP2J7Nv1wFzTXy5jMxn3W3ngQZpdXF71z2LAXzopdtoo1VbkZZwEf994QkbD1XAgH3CnfyZizru3sjNpYK9f",
  "key4": "42bq92mSJUk5QDHM1HcbadeqfQW5Neqbia7F8p4swaNef3H32HnqftruCxVBJt5T4bhzJ1LVFYjbDjRdHF1f5xiG",
  "key5": "4yVtuGbpKPwwXa8ZK2DiL33CywiVodsVzqmvq6M2ScFWEvMBq7MeDmgLhSoEkwywEgnhWFjRHuPUEE7ToHEnVpBT",
  "key6": "VbvCFTcKi7HLg5DuQ8C8zYAPFvVepfXEHyEdKNsc4a2HmD5CCHmNmHAhqJUYc4riRCAHE2dromcG7gvKZQMa6E4",
  "key7": "3z2rNNyFzDELL7xtKgmix6XqRn95Rcs2DXoWeRYwSGAgUubpdkGA9iSZw3JXp5eADojJnVgyvcZch85vb2HoZFhG",
  "key8": "38fSKGi4qdwA4mtb48oVJspy9XME64mhW2LfJorBWTMpDbmGozypShp5rg5ARXnXBdWLaRmqnT9XTsecUNohQesf",
  "key9": "rww42xowbSsT1jzwdexwDx7R7oujF7rCWmoVcfF9EpYBA9CXoL8CQ3JnLMv94TA4HiahGWPRZ8iemn5DwCTr9FR",
  "key10": "xenmLSrxAhsCYBnX6qaA3JeZcWoQwm9RY1gHy1WYL53MrWPMdYmh8hps34hLq462cMR6DEAu9SkG99CkUCNEX4r",
  "key11": "3nAzdRLue4T152BmUVkp7Ss9YizQUcVtMM1kFeCVPfPnK769StUHMuwyLvi32DHY3foxYHKmPj1pB5YdffLSH6DQ",
  "key12": "3eUq4qs2NDPUKx2EjzcWX85pDZy41SjrBaZdwyMri3v9qSWtn7gobFDUdu4AoyJGYewjYgAnr63X99CooDEYNA3B",
  "key13": "347z11X5vZmqbQrfWCv2Rg9ZNBdySkABN7rS2XyamAN1TFgVBEruFWDLwmhU3dySmqgT5G3xXbnZwD6xFHVHXyii",
  "key14": "4WZShR5LKeYyqqSYxkS4B9bULX7ThRKT9qx6hZGBS8T46nCiYUthmBo6bPyCFRLnUHvVLAacS98vVE1rrzCy5tqN",
  "key15": "5UvCgtXpsBcfVYUx1XSTjb7QBPTCTr4wpi2Cqviqn35teuX2FJJX1v3FHksaHnRAofmtE7GLSQPVRbj4R8ZkodWg",
  "key16": "ZFFdHaKpLEPa6nX4wKxyCrEasdL2zxpXLSaw1Bra9f8hC6y6vb5zgGCTDu2w3EsuXNQn72WJKUFSGRA2ZSQfrRT",
  "key17": "RgXwUzT7SiAHRwbHmdccCHruAcwrFRs23mBAzxRYVBAM7AUPcAGwxt3FRNjez5XcgCX7jiJFSWV28ahjfC5DAHC",
  "key18": "f3XQYH47RMsCbnMERiUsTrEfhDk9dgkUAVMqazk4xu8t8xZrV8LK8UWTQR8wiUU4cYp2k6rWXXR8nzCgY79F8kU",
  "key19": "2taQninzD5BA99Uk32RdtAfxZNmTP7Y6LdvETbdXPaPbTUkTMjd6nL4wARVZdtFrRDuHXPr3NVcehb2bVEkd1eeB",
  "key20": "3h4o8iczRAwhQZMMMcQv2CJzFrxq7dauAT87sC3PjPwEA6SVKJsxWKtDcfEgpPbedd9RmpwoZKjbYej4hVG7SoJM",
  "key21": "47N4XbnFbbo2M7rJF6oyysq9r9e9gsE5hi3NBXxW8DLPGcFxaWktmeCNMHCPpHP48hrDWttrgYMhkZ2NL1Rh7bxL",
  "key22": "2q3fNrvYYf8iaXeVibbX55hjK6ctg58uBaS9Q7j5ULPniteaJNsPEZf4vXZaspvzBdZCNBXmUt2CzxvJxBBMiNiN",
  "key23": "3EakfRCnjN2KxzWESQtE59s29p4SQeyP5UbNBDuWPMuK9dqF2XUhYEWnXNbeo451ds43w234V2ZoH1PjvzDrF1Nd",
  "key24": "15LNvPFNUSjiaY7aWJNArZWQrbbU9HgQrTBxk6UKtdcruRrCAH3ja7SiviBa7Mi8wnZKBxRGS8SeHnJgcnewaDK",
  "key25": "46o5urLsGCibNBxnXaeBV82eCiyDSzqB9ZKbvbp5eRf7kq6oyQHkjUANHEpomyjyKFsgovWAeqAt62YMjQKY8ajx",
  "key26": "55JoKSbdWEJ2XVUH3rjSxcErJ3EFoTarprhJooUsjDoKTiXtETZNxjcp74SkpRWdbBUzRvh1oKqnZHzgaxh1XfT8",
  "key27": "2Gne12y3He7eEgV4oLL8ctF6cd2L9Te9uNeFZbV85etJADD3MoLxgCnc5HvcoAs1Z3RmRW3hHt5n53DB1oZvzGVv",
  "key28": "wALX4D532KxeC4VU2syLddf2NVfc6FKmEbXxGgR3d56VeDYBhXvvZjufuAomKQdyg7MHipGp1o3iuwuZZvCVyzx",
  "key29": "4XT5DDG1UeUyNVeZ4FhuuM9FrxGoyzQMgB7fjrGHC5HK7Mb6z4VC8HDaxti5XpoxkBQ8nQGeuWS55V8AbbiRPVFR",
  "key30": "5M8yTzLCqFcaqxoMwc1oPyFVX8moHdi9ZHSg6EmwTkgELCdqWVAg8EbGhrD2iFMhBuxiAH32Dod6sgJbp57XPTM6",
  "key31": "2bjAMp49gqsvEjeDPWiRkTKaNDpUbHCcyzaxnqTUN3dxvoyfL2guxsvu8br726BbDvGux39fF3y2oJ7oREwyymci"
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
